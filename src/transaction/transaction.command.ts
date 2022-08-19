import { Command, CommandRunner, Option } from 'nest-commander';
import { TransactionService } from './transaction.service';

export interface TransactionCommandOptions {
  agencyId: string;
  year: string;
}

// Run: node dist/apps/data-e-file/main transaction-update  -aid CSD-EFILE-e2uOVQqDJd -y 2022
// ts-node src/main.ts transaction-update -aid CSD-EFILE-e2uOVQqDJd -y 2022

@Command({
  name: 'transaction-update',
  description:
    'Fetch the transaction for a given year and perform a GraphQL mutation to the primary API.',
})
export class TransactionCommand extends CommandRunner {
  constructor(private readonly transactionService: TransactionService) {
    super();
  }

  async run(
    passedParam: string[],
    options: TransactionCommandOptions,
  ): Promise<void> {
    console.log({ options });
    const { agencyId, year } = options;

    if (!agencyId || !year) {
      console.log(`Error: missing an option`);
      return;
    }

    await this.transactionService.updateTransactions(options);
  }

  @Option({
    flags: '-aid, --agencyId <string>',
    description: `Id of the agency to use for returned data`,
  })
  id(val: string): string {
    return val;
  }

  @Option({
    flags: '-y, --year <string>',
    description: `Year of the transactions to return data for`,
  })
  year(val: string): string {
    return val;
  }
}
