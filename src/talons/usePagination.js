//imports
import { useRouter } from "next/router";
import { useCallback } from "react";

/**
 * A custom hook to handle pagination functionality.
 * @returns {{
 *    handleChange: Function,
 *    index: number,
 * }}
 */
const usePagination = () => {
  const router = useRouter();
  const { query } = router;
  const { filter } = query;
  const index = parseInt(query.page);

  /**
   * Handle page change and navigation.
   * @param {object} event - The event object from the Pagination component.
   * @param {number} value - The new page index to navigate to.
   */

  const handleChange = useCallback(
    (event, value) => {
      console.log(query);
      if (filter) {
        router.push({
          pathname: "/",
          query: { book: query.book, page: value, filter: filter },
        });
      } else {
        router.push({
          pathname: "/",
          query: { book: query.book, page: value },
        });
      }
    },
    [filter, query, router]
  );

  return {
    handleChange,
    index,
  };
};

export default usePagination;
