import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ApolloClientService } from '../../shared/apollo-client';
import { Agency, SourceAgency } from '../agency';
import { SET_AGENCY } from './agency.gql-mutate';
import { GET_AGENCY_STORAGE } from './agency.gql-query';

@Injectable()
export class AgencyStorageService {
  constructor(
    private readonly apolloClientService: ApolloClientService,
    private configService: ConfigService,
  ) {}

  private API_URL = this.configService.get<string>('urls.storage');

  public async createAgency(agency: SourceAgency): Promise<Agency | null> {
    if (!this.API_URL) return null;

    const graphqlUrl = `${this.API_URL}/graphql`;

    const client = await this.apolloClientService.getApolloClient(graphqlUrl);

    const result = await client.mutate({
      mutation: SET_AGENCY,
      variables: {
        input: agency,
      },
    });

    return result.data.createAgency;
  }

  public async getAgency(id: number): Promise<Agency | null> {
    const graphqlUrl = `${this.API_URL}/graphql`;

    const client = await this.apolloClientService.getApolloClient(graphqlUrl);

    const result = await client.query({
      query: GET_AGENCY_STORAGE,
      variables: {
        agencyId: id,
      },
    });

    return result?.data?.agency ? result.data.agency : null;
  }
}
