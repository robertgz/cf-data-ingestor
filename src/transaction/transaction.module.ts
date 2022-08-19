import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { SharedModule } from '../shared/shared.module';
import { TransactionCommand } from './transaction.command';
import { TransactionService } from './transaction.service';

@Module({
  imports: [HttpModule, SharedModule],
  providers: [TransactionCommand, TransactionService],
  exports: [],
})
export class TransactionModule {}
