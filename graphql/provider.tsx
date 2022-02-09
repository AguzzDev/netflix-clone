import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import { RestLink } from 'apollo-link-rest'

function Provider({ children }: any) {
  const restLink = new RestLink({ uri: `https://api.themoviedb.org/3/` })
  const client = new ApolloClient({
    link: restLink,
    cache: new InMemoryCache()
  })

  return (
    <ApolloProvider client={client}>
      {children}
    </ApolloProvider>
  )
}

export default Provider