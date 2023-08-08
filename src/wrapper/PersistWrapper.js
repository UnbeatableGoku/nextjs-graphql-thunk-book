import { PersistGate } from 'redux-persist/lib/integration/react';
import { persistor, store } from 'src/store/store';

export const PersistWrapper = ({ children }) => {
  if (typeof window === 'undefined') {
    return children;
  } else {
    return <PersistGate persistor={persistor}>{children}</PersistGate>;
  }
};
