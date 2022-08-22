import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { SDEFILE_AGENCIES } from '../../shared/agencies';
import { ApolloClientService } from '../../shared/apollo-client';
import { SourceAgency } from '../agency';
import { GET_AGENCY } from './agency.gql-query';

@Injectable()
export class AgencyGetService {
  constructor(
    private readonly apolloClientService: ApolloClientService,
    private configService: ConfigService,
  ) {}

  private API_URL = this.configService.get<string>('urls.download');

  public async getAgency(): Promise<SourceAgency> {
    const agency = SDEFILE_AGENCIES[0];
    return {
      ...(await this.getAgencyName(agency.url)),
      url: agency.url,
    };
  }

  public async getAgencies(): Promise<SourceAgency[]> {
    const agencies: SourceAgency[] = await Promise.all(
      SDEFILE_AGENCIES.map(async (agency) => ({
        ...(await this.getAgencyName(agency.url)),
        url: agency.url,
      })),
    );

    return agencies;
  }

  async getAgencyName(
    agencyUrl: string,
  ): Promise<{ name: string; software: string }> {
    const graphqlUrl = `${this.API_URL}/graphql`;

    const client = await this.apolloClientService.getApolloClient(graphqlUrl);

    const result = await client.query({
      query: GET_AGENCY,
      variables: {
        input: {
          source: {
            url: agencyUrl,
          },
        },
      },
    });

    const { name, software } = result.data.agency;
    return { name, software };
  }
}
