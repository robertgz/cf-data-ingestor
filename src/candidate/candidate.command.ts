import { Command, CommandRunner, Option } from 'nest-commander';
import { CandidateService } from './candidate.service';

export interface CandidateCommandOptions {
  agencyId: number;
  electionDate: string;
}

// Run: node dist/apps/data-e-file/main candidate-update  -aid 1 -e 06/07/2022
// ts-node src/main.ts candidate-update -aid 1 -e 06/07/2022

@Command({
  name: 'candidate-update',
  description:
    'Fetch a list of candidates for a given election and agency then perform a GraphQL mutation to the primary API.',
})
export class CandidateCommand extends CommandRunner {
  constructor(private readonly candidateService: CandidateService) {
    super();
  }

  async run(
    passedParam: string[],
    options: CandidateCommandOptions,
  ): Promise<void> {
    console.log({ options });
    const { agencyId, electionDate } = options;

    if (!agencyId || !electionDate) {
      console.log(`Error: missing an option`);
      return;
    }

    await this.candidateService.updateCandidates(options);
  }

  @Option({
    flags: '-aid, --agencyId <number>',
    description: `Id of the agency`,
  })
  id(val: string): number {
    return parseInt(val);
  }

  @Option({
    flags: '-e, --electionDate <string>',
    description: `Date of the election`,
  })
  date(val: string): string {
    return val;
  }
}
