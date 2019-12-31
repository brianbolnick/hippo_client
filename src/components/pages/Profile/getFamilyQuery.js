import { gql } from "apollo-boost";

export default gql`
  query familyQuery {
    familyQuery {
      displayName
      isPremium
      joinCode
      users {
        email
        name
      }
    }
  }
`;
