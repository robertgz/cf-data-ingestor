import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ElectionCommand } from './election.command';
import { SharedModule } from './../shared/shared.module';
import { ElectionService } from './election.service';

@Module({
  imports: [HttpModule, SharedModule],
  providers: [ElectionCommand, ElectionService],
  exports: [],
})
export class ElectionModule {}
