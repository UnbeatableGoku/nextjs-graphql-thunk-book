//imports
import { useRouter } from "next/router";
import { useCallback, useState } from "react";

/**
 * A custom hook to handle filtering functionality for book list.
 * @returns {{
 *    handleClearFilter: Function
 *    handleFilterValue: Function
 *    filter: string,
 *    setshowFilters: Funtion
 *    showFilters: boolean,
 *    filteData: string[]
 * }}
 */
const useFilter = () => {
  const [showFilters, setshowFilters] = useState(false);
  const filteData = ["paid-ebooks", "ebooks"];
  const router = useRouter();
  const { query } = router;
  const { book } = query;
  const { filter } = query;

  /**
   * Handle clearing the filter and navigate back to the home page with default filter settings.
   */
  const handleClearFilter = useCallback (() => {
    router.push({
      pathname: "/",
      query: { book: book, page: 1 },
    });
  }, [book, router]);

  /**
   * Handle selecting a filter option and update the URL query accordingly.
   * @param {object} e - The click event object.
   */
  const handleFilterValue = useCallback(
    (e) => {
      e.preventDefault();
      setshowFilters(false);

      router.push({
        pathname: "/",
        query: { book: book, page: 1, filter: e.target.innerText },
      });
    },
    [book, router]
  );
  return {
    handleClearFilter,
    handleFilterValue,
    filter,
    setshowFilters,
    showFilters,
    filteData,
  };
};

export default useFilter;
