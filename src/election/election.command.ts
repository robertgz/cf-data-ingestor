import { Command, CommandRunner, Option } from 'nest-commander';
import { ElectionService } from './election.service';

export interface ElectionCommandOptions {
  agencyId: string;
}

// Run: node dist/apps/data-e-file/main election-update  -aid 12
// ts-node src/main.ts election-update -aid 12

@Command({
  name: 'election-update',
  description:
    'Fetch a list of elections and perform a GraphQL mutation to the storage API.',
})
export class ElectionCommand extends CommandRunner {
  constructor(private readonly electionService: ElectionService) {
    super();
  }

  async run(
    passedParam: string[],
    options: ElectionCommandOptions,
  ): Promise<void> {
    console.log({ options });
    const { agencyId } = options;

    if (!agencyId) {
      console.log(`Error: missing agencyId`);
      return;
    }

    await this.electionService.updateElections(options);
  }

  @Option({
    flags: '-aid, --agencyId <number>',
    description: `Unique integer Id of the agency that is generate by the database.`,
  })
  id(val: number): number {
    return val;
  }
}
