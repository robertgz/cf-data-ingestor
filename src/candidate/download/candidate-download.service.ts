import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ApolloClientService } from '../../shared/apollo-client';
import { CandidateDownload } from '../candidate';
import { GET_CANDIDATES } from './candidates.gql-query';
// import { ElectionSource } from '../election';

@Injectable()
export class CandidateDownloadService {
  constructor(
    private readonly apolloClientService: ApolloClientService,
    private configService: ConfigService,
  ) {}

  private API_URL = this.configService.get<string>('urls.download');

  public async getCandidates(
    agencyUrl: string,
    electionDate: string,
  ): Promise<CandidateDownload[]> {
    const graphqlUrl = `${this.API_URL}/graphql`;

    const client = await this.apolloClientService.getApolloClient(graphqlUrl);

    const result = await client.query({
      query: GET_CANDIDATES,
      variables: {
        input: {
          electionDate,
          source: {
            url: agencyUrl,
          },
        },
      },
    });

    return result.data.candidates;
  }
}
