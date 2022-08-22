import gql from 'graphql-tag';

export const SET_AGENCY = gql`
  mutation Mutation($input: AgencyInput!) {
    createAgency(input: $input) {
      id
      name
      software
      url
    }
  }
`;
