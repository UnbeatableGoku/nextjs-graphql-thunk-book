import { useSelector } from 'react-redux';

const useBookCompareBtn = () => {
  const { compareBook } = useSelector((state) => state.book);
  return {
    compareBook,
  };
};

export default useBookCompareBtn;
