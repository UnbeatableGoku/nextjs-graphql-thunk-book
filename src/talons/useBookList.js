import { useDispatch, useSelector } from 'react-redux';
import { addBookToCompare, removeBookFromCompare } from 'src/store/book-slice';

const useBookList = () => {
  const dispatch = useDispatch();
  const { compareBook } = useSelector((state) => state.book);

  const handleBookCompare = (id) => {
    dispatch(addBookToCompare(id));
  };

  const handleBookRemoveCompare = (id) => {
    dispatch(removeBookFromCompare(id));
  };
  return {
    handleBookCompare,
    compareBook,
    handleBookRemoveCompare,
  };
};

export default useBookList;
