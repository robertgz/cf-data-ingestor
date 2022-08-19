import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { SharedModule } from '../shared/shared.module';
import { CandidateCommand } from './candidate.command';
import { CandidateService } from './candidate.service';

@Module({
  imports: [HttpModule, SharedModule],
  providers: [CandidateCommand, CandidateService],
  exports: [],
})
export class CandidateModule {}
