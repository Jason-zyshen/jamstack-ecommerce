import { HYGRAPH_URL, HYGRAPH_PERMANENTAUTH_TOKEN } from './constants.js';
import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: HYGRAPH_URL,
    cache: new InMemoryCache(),
});

export default client;