import gql from 'graphql-tag';

export const GET_ELECTIONS = gql`
  query Elections($input: ElectionInput!) {
    elections(input: $input) {
      date
      type
    }
  }
`;
