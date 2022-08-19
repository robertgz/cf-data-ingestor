import { Injectable } from '@nestjs/common';
import { ALL_AGENCIES } from '../shared/agencies';
import { ApolloClientService } from '../shared/apollo-client';
import { CandidateCommandOptions } from './candidate.command';
import { GET_CANDIDATES } from './candidates.gql-query';

const DESTINATION_URL = '';

const SOURCE_URL = process.env.WEB_SCRAPER_API_GQL
  ? process.env.WEB_SCRAPER_API_GQL
  : 'http://localhost:3100/graphql';

@Injectable()
export class CandidateService {
  constructor(private readonly apolloClientService: ApolloClientService) {}

  public async updateCandidates(options: CandidateCommandOptions) {
    const client = await this.apolloClientService.getApolloClient(SOURCE_URL);

    console.log({ SOURCE_URL });

    const { agencyId, electionDate } = options;
    const agency = ALL_AGENCIES.find((agency) => agency.id === agencyId);

    // console.log({ ALL_AGENCIES });

    console.log({ agency });

    if (!agency) return;

    const result = await client.query({
      query: GET_CANDIDATES,
      variables: {
        input: {
          electionDate: electionDate,
          source: {},
        },
      },
    });

    console.log({ result: result.data.candidates });

    // try {
    //   console.info('Update ... Complete');
    // } catch (error) {
    //   console.error('Error updating ...');
    //   console.error({ error });
    // }
  }
}
