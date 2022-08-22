import { Injectable } from '@nestjs/common';
import { AgencyGetService } from './get/agency-get.service';
import { AgencySetService } from './set/agency-set.service';

@Injectable()
export class AgencyService {
  constructor(
    private readonly agencyGetService: AgencyGetService,
    private readonly agencySetService: AgencySetService,
  ) {}

  public async createAgency() {
    const agency = await this.agencyGetService.getAgency();

    return await this.agencySetService.createAgency(agency);
  }
}
