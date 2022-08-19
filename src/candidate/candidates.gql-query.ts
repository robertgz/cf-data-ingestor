import gql from 'graphql-tag';

export const GET_CANDIDATES = gql`
  query Candidates($input: CandidatesInput!) {
    candidates(input: $input) {
      fullOfficeName
      candidateName
    }
  }
`;
