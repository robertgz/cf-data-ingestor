import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';
import { SampleCommand } from './sample-command';
import { ElectionModule } from './election/election.module';
import { CandidateModule } from './candidate/candidate.module';
import { TransactionModule } from './transaction/transaction.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      load: [configuration],
    }),
    ElectionModule,
    CandidateModule,
    TransactionModule,
  ],
  providers: [SampleCommand],
})
export class CommandModule {}
