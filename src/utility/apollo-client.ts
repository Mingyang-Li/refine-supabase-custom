import { ApolloClient, InMemoryCache } from "@apollo/client";
import { config } from "services/config.service";

export const apolloClient = new ApolloClient({
  uri: config.REACT_APP_API_URL,
  cache: new InMemoryCache(),
});
