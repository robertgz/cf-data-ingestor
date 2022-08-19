import { Module } from '@nestjs/common';
import { SampleCommand } from './sample-command';
import { ElectionModule } from './election/election.module';
import { CandidateModule } from './candidate/candidate.module';

@Module({
  imports: [ElectionModule, CandidateModule],
  providers: [SampleCommand],
})
export class CommandModule {}
