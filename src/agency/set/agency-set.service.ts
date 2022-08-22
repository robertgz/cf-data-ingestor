import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ApolloClientService } from '../../shared/apollo-client';
import { Agency, SourceAgency } from '../agency';
import { SET_AGENCY } from './agency.gql-mutate';

@Injectable()
export class AgencySetService {
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
}
