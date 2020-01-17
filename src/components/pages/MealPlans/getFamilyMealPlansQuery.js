import { gql } from 'apollo-boost';

export default gql`
  query mealPlansQuery($familyId: Int!) {
    mealPlansQuery(familyId: $familyId) {
      mealPlans {
        id
        archived
        insertedAt
        family {
          displayName
        }
        recipes {
          id
          title
          imageUrl
          category {
            name
          }
          dishType {
            name
          }
        }
      }
    }
  }
`;
