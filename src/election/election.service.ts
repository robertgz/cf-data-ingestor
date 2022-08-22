import { Injectable } from '@nestjs/common';
import { ApolloClientService } from './../shared/apollo-client';
// import { ElectionCommandOptions } from './election.command';
import { AgencyStorageService } from '../agency/storage/agency-storage.service';
import { ElectionDownloadService } from './download/election-download.service';
import { ElectionInput, SourceElection } from './election';

@Injectable()
export class ElectionService {
  constructor(
    private readonly apolloClientService: ApolloClientService,
    private readonly agencyStorageService: AgencyStorageService,
    private readonly electionDownloadService: ElectionDownloadService,
  ) {}

  // public async updateElections(options: ElectionCommandOptions) {
  //   console.log({ SOURCE_URL });
  //   const client = await this.apolloClientService.getApolloClient(SOURCE_URL);

  //   const { agencyId } = options;

  //   const agency = ALL_AGENCIES.find((agency) => agency.id === agencyId);

  //   // console.log({ ALL_AGENCIES });

  //   console.log({ agency });

  //   if (!agency) return;

  //   const result = await client.query({
  //     query: GET_ELECTIONS,
  //     variables: {
  //       input: {
  //         source: {},
  //       },
  //     },
  //   });

  //   console.log({ result: result.data.elections });

  //   // try {
  //   //   console.info('Update Elections Complete');
  //   // } catch (error) {
  //   //   console.error('Error updating Elections');
  //   //   console.error({ error });
  //   // }
  // }

  public async addElections(agencyId: number) {
    const agency = await this.agencyStorageService.getAgency(agencyId);
    console.log({ agency });

    if (!agency) return;
    const { url } = agency;
    const downloadedElections = await this.electionDownloadService.getElections(
      url,
    );

    console.log({ downloadedElections });

    // const elections = this.transformElections(downloadedElections);
    // console.log({ elections });

    // get url from database for a given agencyId
    // use url to get elections
    // add each election with its agencyId to storage
  }

  // async getElections(url: string) {}
  // async setElections(agencyId: number, elections) {}

  transformElections(
    agencyId: number,
    elections: SourceElection[],
  ): ElectionInput[] {
    return elections.map((election) => ({
      date: election.date,
      type: election.type,
      agencyId: agencyId,
    }));
  }
}
