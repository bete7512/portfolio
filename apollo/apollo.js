import { InMemoryCache } from 'apollo-cache-inmemory'

export default (context) => {
  return {
    httpEndpoint: 'https://myportfolio.hasura.app/v1/graphql',
    cache: new InMemoryCache(),
  }
}