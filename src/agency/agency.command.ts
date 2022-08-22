import { Command, CommandRunner, Option } from 'nest-commander';
import { AgencyService } from './agency.service';

// export interface AgencyCommandOptions {
//   url: string;
// }

// ts-node src/main.ts agency-create-sd-efile

@Command({
  name: 'agency-create-sd-efile',
  description:
    'Get the SD Efile Agency url from a file, use the data downloader service to get its details, then and send them to the storage service',
})
export class AgencyCommand extends CommandRunner {
  constructor(private readonly agencyService: AgencyService) {
    super();
  }

  async run(
    passedParam: string[],
    // options: AgencyCommandOptions,
  ): Promise<void> {
    const result = await this.agencyService.createAgency();

    if (result) {
      console.log(
        'Agency exists or was added to data store. Reference agency by id. ',
      );
      console.log(result);
    }

    return;
  }
}
