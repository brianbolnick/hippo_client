import gql from 'graphql-tag';

export default gql`
  mutation createMealPlan {
    createMealPlan {
      familyId
      id
      archived
    }
  }
`;
