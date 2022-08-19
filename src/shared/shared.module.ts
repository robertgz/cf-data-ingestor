import { Module } from '@nestjs/common';
import { ApolloClientService } from './apollo-client';

@Module({
  imports: [],
  providers: [ApolloClientService],
  exports: [ApolloClientService],
})
export class SharedModule {}
