import gql from "graphql-tag";

export default gql`
  mutation createRecipe(
    $calories: String
    $categoryId: Int
    $cookTime: String!
    $difficulty: Int
    $dishTypeId: Int
    $familyId: Int!
    $id: Int
    $imageUrl: String
    $notes: String
    $prepTime: String!
    $rawIngredients: [String]
    $servings: Int
    $steps: [String]
    $title: String!
    $type: String
    $userId: Int!
    $image: Upload
  ) {
    createRecipe(
      calories: $calories
      categoryId: $categoryId
      cookTime: $cookTime
      difficulty: $difficulty
      dishTypeId: $dishTypeId
      familyId: $familyId
      id: $id
      imageUrl: $imageUrl
      notes: $notes
      prepTime: $prepTime
      rawIngredients: $rawIngredients
      servings: $servings
      steps: $steps
      title: $title
      type: $type
      userId: $userId
      image: $image
    ) {
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
