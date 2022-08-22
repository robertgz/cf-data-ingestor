import gql from 'graphql-tag';

export const ELECTIONS_DOWNLOAD_QUERY = gql`
  query Elections($input: ElectionInput!) {
    elections(input: $input) {
      date
      type
    }
  }
`;
