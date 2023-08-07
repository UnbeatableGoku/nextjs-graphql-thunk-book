//third-party
const { useForm } = require("react-hook-form");

//imports
import { useRouter } from "next/router";
import { useCallback } from "react";

/**
 * A custom hook to handle search box functionality.
 * @returns {{
 *    register: Object,
 *    handleSubmit: Function,
 *    handleSearchQuery: Function
 * }} An object containing the necessary functions to handle the search box.
 */
export const useSearchBox = () => {
  const { register, handleSubmit } = useForm();
  const router = useRouter();

  /**
   * Handle the search query and redirect to the home page with search parameters.
   * @param {{ query: string }} data - The search query submitted by the user.
   */

  const handleSearchQuery = useCallback(
    ({ query }) => {
      router.push({ pathname: "/", query: { book: query, page: 1 } });
    },
    [router]
  );

  return {
    register,
    handleSubmit,
    handleSearchQuery,
  };
};
