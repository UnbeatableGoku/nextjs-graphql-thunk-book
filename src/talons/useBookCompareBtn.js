import { useSelector } from 'react-redux';

/**
 * useBookCompareBtn is a custom React hook used to handle book comparison functionality.
 * It uses `react-redux`'s `useSelector` hook to select the compareBook state from the Redux store.
 * @returns {Object} An object containing the compareBook state.
 */
const useBookCompareBtn = () => {
  const { compareBook } = useSelector((state) => state.book);
  return {
    compareBook,
  };
};

export default useBookCompareBtn;
