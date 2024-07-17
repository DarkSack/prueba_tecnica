import { gql } from "@apollo/client";

export const GET_CHARACTERS = gql`
  {
    characters {
      results {
        name
        gender
        status
        image
      }
    }
  }
`;

export const GET_CHARACTER_INFO = gql`
  {
    characters {
      results {
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
  }
`;
