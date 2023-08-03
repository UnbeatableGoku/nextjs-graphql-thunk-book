import { client } from 'src/graphql/client';
import '../styles/globals.css';
import { ApolloProvider } from '@apollo/client';

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
