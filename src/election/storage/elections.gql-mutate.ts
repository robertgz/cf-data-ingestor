import gql from 'graphql-tag';

export const STORE_ELECTION = gql`
  mutation CreateElections($input: [ElectionInput!]) {
    createElections(input: $input) {
      id
      date
      type
    }
  }
`;
