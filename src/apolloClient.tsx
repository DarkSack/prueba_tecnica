import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql', // URL de la API GraphQL de Rick and Morty
  cache: new InMemoryCache(),
});

export default client;
