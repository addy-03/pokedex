const { ApolloProvider, ApolloClient, InMemoryCache } = require("@apollo/client");

const client = new ApolloClient({
  uri: "https://graphql-pokemon2.vercel.app/",
  cache: new InMemoryCache(),
});

export const ApolloClientContextProvider = ({ children }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
