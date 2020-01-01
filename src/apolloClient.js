import { ApolloClient } from "apollo-client";
import { from } from "apollo-link";
import { createHttpLink } from "apollo-link-http";
import { setContext } from "apollo-link-context";
import { InMemoryCache } from "apollo-cache-inmemory";
import { onError } from "apollo-link-error";
import { createLink } from "apollo-absinthe-upload-link";
import { token } from "./utils";

const httpLink = createHttpLink({
  uri: process.env.REACT_APP_GRAPHQL_ENDPOINT
});

const uploadLink = createLink({
  uri: process.env.REACT_APP_GRAPHQL_ENDPOINT
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ""
    }
  };
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );
  }
  if (networkError) {
    console.log(`[Network error]: ${networkError}`);
  }
});

const client = new ApolloClient({
  link: from([errorLink, authLink, uploadLink, httpLink]),
  cache: new InMemoryCache()
});

export default client;
