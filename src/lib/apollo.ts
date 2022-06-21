import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4opwv7n0qgc01z461sxbb09/master',
  cache: new InMemoryCache(),
});
