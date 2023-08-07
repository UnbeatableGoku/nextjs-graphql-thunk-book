//imports
import { useCallback } from "react";
import { addBookToCompare, removeBookFromCompare } from "src/store/book-slice";

//third-party
import { useDispatch, useSelector } from "react-redux";

/**
 * Custom hook to handle book list operations, such as adding books to compare list and removing books from it.
 * @returns {{
 *    handleBookCompare: Function,
 *    compareBook: Array,
 *    handleBookRemoveCompare: Function,
 * }}
 */
const useBookList = () => {
  const dispatch = useDispatch();
  const { compareBook } = useSelector((state) => state.book);

  /**
   * Handle adding a book to the compare list.
   * @param {string} id - The ID of the book to be added to the compare list.
   */
  const handleBookCompare = useCallback(
    (id) => {
      dispatch(addBookToCompare(id));
    },
    [dispatch]
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

export default useBookList;
