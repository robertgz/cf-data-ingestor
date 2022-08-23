import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ElectionCommand } from './election.command';
import { SharedModule } from './../shared/shared.module';
import { ElectionService } from './election.service';
import { ConfigModule } from '@nestjs/config';
import { AgencyModule } from '../agency/agency.module';
import { ElectionDownloadService } from './download/election-download.service';
import { ElectionStorageService } from './storage/election-storage.service';

@Module({
  imports: [HttpModule, ConfigModule, SharedModule, AgencyModule],
  providers: [
    ElectionCommand,
    ElectionService,
    ElectionDownloadService,
    ElectionStorageService,
  ],
  exports: [],
})
export class ElectionModule {}
