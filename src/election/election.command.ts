import { Command, CommandRunner, Option } from 'nest-commander';
import { ElectionService } from './election.service';

export interface ElectionCommandOptions {
  agencyId: number;
}

// Run: node dist/apps/data-e-file/main election-update  -aid 1
// ts-node src/main.ts election-update -aid 1

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

    const result = await this.electionService.addElections(agencyId);

    if (result) {
      console.log(
        'Elections added to or already exist in storage for agency. ',
      );
      console.log(result);
    }
  }

  @Option({
    flags: '-aid, --agencyId <number>',
    description: `Unique integer Id of the agency that is generate by the database.`,
  })
  id(val: string): number {
    return parseInt(val);
  }
}
