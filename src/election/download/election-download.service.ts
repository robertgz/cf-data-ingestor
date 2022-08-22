import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ApolloClientService } from '../../shared/apollo-client';
import { ELECTIONS_DOWNLOAD_QUERY } from './elections.gql-query';

@Injectable()
export class ElectionDownloadService {
  constructor(
    private readonly apolloClientService: ApolloClientService,
    private configService: ConfigService,
  ) {}

  private API_URL = this.configService.get<string>('urls.download');

  public async getElections(
    agencyUrl: string,
  ): Promise<{ date: string; type: string }> {
    const graphqlUrl = `${this.API_URL}/graphql`;

    const client = await this.apolloClientService.getApolloClient(graphqlUrl);

    const result = await client.query({
      query: ELECTIONS_DOWNLOAD_QUERY,
      variables: {
        input: {
          source: {
            url: agencyUrl,
          },
        },
      },
    });

    return result.data.elections;
  }
}
