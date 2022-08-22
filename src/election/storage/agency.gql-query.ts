import gql from 'graphql-tag';

export const GET_AGENCY_STORAGE = gql`
  query Agency($agencyId: Int) {
    agency(id: $agencyId) {
      id
      name
      software
      url
    }
  }
`;
