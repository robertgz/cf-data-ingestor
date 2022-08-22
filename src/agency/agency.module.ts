import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SharedModule } from './../shared/shared.module';
import { AgencyCommand } from './agency.command';
import { AgencyService } from './agency.service';
import { AgencyGetService } from './get/agency-get.service';
import { AgencySetService } from './set/agency-set.service';

@Module({
  imports: [HttpModule, ConfigModule, SharedModule],
  providers: [AgencyCommand, AgencyService, AgencyGetService, AgencySetService],
  exports: [],
})
export class AgencyModule {}
