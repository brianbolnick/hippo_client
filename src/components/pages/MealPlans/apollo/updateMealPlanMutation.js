import gql from 'graphql-tag';

export default gql`
  mutation updateMealPlan($id: Int!, $recipeIds: [Int!]) {
    updateMealPlan(id: $id, recipeIds: $recipeIds) {
      archived
      id
      recipes {
        title
      }
    }
  }
`;
