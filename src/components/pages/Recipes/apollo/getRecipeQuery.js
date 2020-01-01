import { gql } from "apollo-boost";

export default gql`
  query recipeId($recipeId: Int!) {
    recipeQuery(recipeId: $recipeId) {
      calories
      category {
        id
        name
      }
      cookTime
      difficulty
      dishType {
        id
        name
      }
      family {
        id
        displayName
        isBeta
      }
      familyId
      id
      imageUrl
      rawIngredients
      isPublic
      notes
      prepTime
      servings
      steps
      title
      type
      user {
        id
        name
        isBeta
      }
    }
  }
`;
