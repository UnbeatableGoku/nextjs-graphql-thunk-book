import { client } from 'src/graphql/client';
import '../styles/globals.css';
import { ApolloProvider } from '@apollo/client';
import { useRef } from 'react';
import LoadingBar from 'react-top-loading-bar';
import { Provider } from 'react-redux';
import { store } from 'src/store/store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PersistWrapper from 'src/wrapper/PersistWrapper';
function MyApp({ Component, pageProps }) {
  const ref = useRef(null);
  return (
    <>
      <Provider store={store}>
        <ApolloProvider client={client}>
          <PersistWrapper>
            <LoadingBar ref={ref} color='#ba5bff' />
            <ToastContainer />
            <Component {...pageProps} />
          </PersistWrapper>
        </ApolloProvider>
      </Provider>
    </>
  );
}

export default MyApp;
