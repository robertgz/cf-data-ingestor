import { Module } from '@nestjs/common';
import { SampleCommand } from './sample-command';
import { ElectionModule } from './election/election.module';

@Module({
  imports: [ElectionModule],
  providers: [SampleCommand],
})
export class CommandModule {}
