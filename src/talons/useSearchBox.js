import { useRouter } from 'next/router';
const { useForm } = require('react-hook-form');

/**
 * A custom hook to handle search box functionality.
 * @returns {{
 *    register: Function,
 *    handleSubmit: Function,
 *    handleSearchQuery: Function
 * }} An object containing the necessary functions to handle the search box.
 */
export const useSearchBox = () => {
  // Get form control functions from react-hook-form
  const { register, handleSubmit } = useForm();

  // Get the router instance from Next.js
  const router = useRouter();

  /**
   * Handle the search query and redirect to the home page with search parameters.
   * @param {{ query: string }} data - The search query submitted by the user.
   */
  const handleSearchQuery = ({ query }) => {
    // Redirect to the home page with search query and page number 1 as query parameters
    router.push({ pathname: '/', query: { book: query, page: 1 } });
  };

  return {
    register,
    handleSubmit,
    handleSearchQuery,
  };
};
