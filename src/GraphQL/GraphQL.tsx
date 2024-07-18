import { gql } from "@apollo/client";

export const GET_CHARACTERS = gql`
  {
    characters {
      results {
        id
        name
        gender
        status
        image
      }
    }
  }
`;

export const GET_CHARACTER_INFO = gql`
  query GetCharacterInfo($id: ID!) {
    character(id: $id) {
      id
      origin {
        name
        dimension
        type
      }
      location {
        name
        type
        dimension
      }
      episode {
        id
      }
      name
      gender
      status
      image
    }
  }
`;
