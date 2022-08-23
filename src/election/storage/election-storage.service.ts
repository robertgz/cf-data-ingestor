import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ApolloClientService } from '../../shared/apollo-client';
import { Election, ElectionInput } from '../election';
import { STORE_ELECTION } from './elections.gql-mutate';

@Injectable()
export class ElectionStorageService {
  constructor(
    private readonly apolloClientService: ApolloClientService,
    private configService: ConfigService,
  ) {}

  private API_URL = this.configService.get<string>('urls.storage');

  public async storeElections(elections: ElectionInput[]): Promise<Election[]> {
    const graphqlUrl = `${this.API_URL}/graphql`;

    const client = await this.apolloClientService.getApolloClient(graphqlUrl);

    const result = await client.mutate({
      mutation: STORE_ELECTION,
      variables: {
        input: elections,
      },
    });

    return result.data.createElections;
  }
}
