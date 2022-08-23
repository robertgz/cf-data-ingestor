import { Injectable } from '@nestjs/common';
import { AgencyStorageService } from '../agency/storage/agency-storage.service';
import { ElectionDownloadService } from './download/election-download.service';
import { ElectionInput, SourceElection } from './election';
import { ElectionStorageService } from './storage/election-storage.service';

@Injectable()
export class ElectionService {
  constructor(
    private readonly agencyStorageService: AgencyStorageService,
    private readonly electionDownloadService: ElectionDownloadService,
    private readonly electionStorageService: ElectionStorageService,
  ) {}

  // public async updateElections(options: ElectionCommandOptions) {
  // }

  public async addElections(agencyId: number) {
    const agency = await this.agencyStorageService.getAgency(agencyId);

    if (!agency) return;

    const { url } = agency;
    const downloadedElections = await this.electionDownloadService.getElections(
      url,
    );

    const elections = this.addAgencyIdToElections(
      agencyId,
      downloadedElections,
    );

    const result = await this.electionStorageService.storeElections(elections);

    return result;
  }

  addAgencyIdToElections(
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
