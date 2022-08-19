import { Injectable } from '@nestjs/common';
import { ALL_AGENCIES } from './../shared/agencies';
import { ApolloClientService } from './../shared/apollo-client';
import { ElectionCommandOptions } from './election.command';
import { GET_ELECTIONS } from './elections.gql-query';

const DESTINATION_URL = '';

const SOURCE_URL = process.env.WEB_SCRAPER_API_GQL
  ? process.env.WEB_SCRAPER_API_GQL
  : 'http://localhost:3100/graphql';

@Injectable()
export class ElectionService {
  constructor(private readonly apolloClientService: ApolloClientService) {}

  public async updateElections(options: ElectionCommandOptions) {
    console.log({ SOURCE_URL });
    const client = await this.apolloClientService.getApolloClient(SOURCE_URL);

    const { agencyId } = options;

    const agency = ALL_AGENCIES.find((agency) => agency.id === agencyId);

    // console.log({ ALL_AGENCIES });

    console.log({ agency });

    if (!agency) return;

    const result = await client.query({
      query: GET_ELECTIONS,
      variables: {
        input: {
          source: {},
        },
      },
    });

    console.log({ result: result.data.elections });

    // try {
    //   console.info('Update Elections Complete');
    // } catch (error) {
    //   console.error('Error updating Elections');
    //   console.error({ error });
    // }
  }
}
