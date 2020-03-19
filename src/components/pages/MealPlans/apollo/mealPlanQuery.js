import gql from 'graphql-tag';

export default gql`
  query mealPlanQuery($id: Int!) {
    mealPlanQuery(id: $id) {
      archived
      insertedAt
      id
      family {
        displayName
      }
      recipes {
        id
        title
        rawIngredients
      }
    }
  }
`;
