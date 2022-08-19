import gql from 'graphql-tag';

export const GET_TRANSACTIONS = gql`
  query TransactionsYear($input: TransactionYearInput!) {
    transactionsYear(input: $input) {
      url
    }
  }
`;
