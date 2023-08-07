//imports
import { useCallback } from 'react';
import { addBookToCompare, removeBookFromCompare } from 'src/store/book-slice';

//third-party
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

/**
 * Custom hook to handle book list operations, such as adding books to compare list and removing books from it.
 * @returns {{
 *    handleBookCompare: Function,
 *    compareBook: Array,
 *    handleBookRemoveCompare: Function,
 * }}
 */
const useBookCard = () => {
  const dispatch = useDispatch();
  const { compareBook } = useSelector((state) => state.book);

  /**
   * Handle adding a book to the compare list.
   * @param {string} id - The ID of the book to be added to the compare list.
   */
  const handleBookCompare = useCallback(
    (id) => {
      console.log(compareBook);
      if (compareBook.length < 5) {
        console.log(compareBook.length);
        dispatch(addBookToCompare(id));
        compareBook;
      } else {
        toast.warning("You can't add more than 5 books for compare");
      }
    },
    [dispatch, compareBook]
  );

  /**
   * Handle removing a book from the compare list.
   * @param {string} id - The ID of the book to be removed from the compare list.
   */
  const handleBookRemoveCompare = useCallback(
    (id) => {
      dispatch(removeBookFromCompare(id));
    },
    [dispatch]
  );

  return {
    handleBookCompare,
    compareBook,
    handleBookRemoveCompare,
  };
};

export default useBookCard;
