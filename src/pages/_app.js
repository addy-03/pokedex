import { ApolloClientContextProvider } from "@/context/apolloGraphQLContext";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <ApolloClientContextProvider>
      <Component {...pageProps} />
    </ApolloClientContextProvider>
  );
}
