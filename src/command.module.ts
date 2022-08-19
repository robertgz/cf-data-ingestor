import { Module } from '@nestjs/common';
import { SampleCommand } from './sample-command';
import { ElectionModule } from './election/election.module';
import { CandidateModule } from './candidate/candidate.module';
import { TransactionModule } from './transaction/transaction.module';

@Module({
  imports: [ElectionModule, CandidateModule, TransactionModule],
  providers: [SampleCommand],
})
export class CommandModule {}
