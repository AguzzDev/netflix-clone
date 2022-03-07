import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client"
import { RestLink } from "apollo-link-rest"

const cache = new InMemoryCache({
  typePolicies: {
    getSearch: {
      fields: {
        search: {
          keyArgs: [],
          merge(existing, incoming, { args: { page = 1 } }) {
            const merged = existing ? existing.slice(0) : []
            for (let i = 0; i < incoming.length; ++i) {
              merged[page + i] = incoming[i]
            }
            return merged
          },
        },
      },
    },
  },
})

function Provider({ children }: any) {
  const restLink = new RestLink({ uri: `https://api.themoviedb.org/3/` })
  const client = new ApolloClient({
    link: restLink,
    cache,
  })

  return <ApolloProvider client={client}>{children}</ApolloProvider>
}

export default Provider
