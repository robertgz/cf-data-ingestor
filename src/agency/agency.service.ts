import { Injectable } from '@nestjs/common';
import { AgencyGetService } from './get/agency-get.service';
import { AgencyStorageService } from './storage/agency-storage.service';

@Injectable()
export class AgencyService {
  constructor(
    private readonly agencyGetService: AgencyGetService,
    private readonly agencyStorageService: AgencyStorageService,
  ) {}

  public async createAgency() {
    const agency = await this.agencyGetService.getAgency();

    return await this.agencyStorageService.createAgency(agency);
  }
}
