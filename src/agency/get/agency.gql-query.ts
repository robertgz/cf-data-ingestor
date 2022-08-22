import gql from 'graphql-tag';

export const GET_AGENCY = gql`
  query Agency($input: AgencyInput) {
    agency(input: $input) {
      name
      software
    }
  }
`;
