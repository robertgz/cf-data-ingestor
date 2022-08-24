import { Injectable } from '@nestjs/common';
import { AgencyStorageService } from 'src/agency/storage/agency-storage.service';
import { ApolloClientService } from '../shared/apollo-client';
import { CandidateDownload, CandidateInput } from './candidate';
import { CandidateCommandOptions } from './candidate.command';
import { CandidateDownloadService } from './download/candidate-download.service';

@Injectable()
export class CandidateService {
  constructor(
    private readonly agencyStorageService: AgencyStorageService,
    private readonly apolloClientService: ApolloClientService,
    private readonly candidateDownloadService: CandidateDownloadService,
  ) {}

  public async updateCandidates(options: CandidateCommandOptions) {
    const { agencyId, electionDate } = options;

    const agency = await this.agencyStorageService.getAgency(agencyId);
    // const election = await this.agencyStorageService.getElection(agencyId, electionDate);
    // const { id: electionId } = election;

    // needto to start with election id of an election already in storage then get its agency by election id.
    if (!agency) return;

    const { url } = agency;
    const downloadElections = this.candidateDownloadService.getCandidates(
      url,
      electionDate,
    );

    // const candidates = this.addElectionIdToCandidates(electionId, downloadElections)

  }

  addElectionIdToCandidates(
    electionId: number,
    candidates: CandidateDownload[],
  ): CandidateInput[] {
    return candidates.map((candidate) => ({
      ...candidate,
      electionId: electionId,
    }));
  }
}
