import { client } from 'src/graphql/client';
import '../styles/globals.css';
import { ApolloProvider } from '@apollo/client';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useRef } from 'react';
import LoadingBar from 'react-top-loading-bar';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from 'src/store/store';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function MyApp({ Component, pageProps }) {
  const ref = useRef(null);
  return (
    <>
      <Provider store={store}>
        <ApolloProvider client={client}>
          <PersistGate persistor={persistor}>
            {() => (
              <>
                <LoadingBar ref={ref} color='#ba5bff' />
                <ToastContainer />
                <Component {...pageProps} />
              </>
            )}
          </PersistGate>
        </ApolloProvider>
      </Provider>
    </>
  );
}

export default MyApp;
