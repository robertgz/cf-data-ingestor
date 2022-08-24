import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { SharedModule } from '../shared/shared.module';
import { CandidateCommand } from './candidate.command';
import { CandidateService } from './candidate.service';
import { AgencyModule } from 'src/agency/agency.module';
import { CandidateDownloadService } from './download/candidate-download.service';

@Module({
  imports: [HttpModule, SharedModule, AgencyModule],
  providers: [CandidateCommand, CandidateService, CandidateDownloadService],
  exports: [],
})
export class CandidateModule {}
