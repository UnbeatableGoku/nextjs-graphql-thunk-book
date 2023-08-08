import { PersistGate } from 'redux-persist/lib/integration/react';
import { persistor } from 'src/store/store';

const PersistWrapper = ({ children }) => {
  if (typeof window === undefined) {
    return children;
  } else {
    return <PersistGate persistor={persistor}>{children}</PersistGate>;
  }
};

export default PersistWrapper;
