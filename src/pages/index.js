//components
import SearchBox from "@components/SearchBox";
import BookPagination from "@components/BookPagination";
import BookList from "@components/BookList";

//third-party
import { size } from "lodash";

//imports
import { client } from "src/graphql/client";
import { GETALLBOOKS } from "src/graphql/query";

/**
 * Home component that displays a list of books.
 *
 * @param {Object} props
 * @param {Book[]} props.books - An array of Book objects.
 *
 * @returns {JSX.Element} The JSX representation of the Home component.
 */

export default function Home({ books }) {
  return (
<<<<<<< HEAD
    <div className=' text-black'>
      <SearchBox books={books} />
      {size(books) > 0 ? (
        <div className='container mx-auto relative'>
          <div className='bg-slate-200 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4  '>
=======
    <div className="bg-slate-200 text-black ">
      <SearchBox books={books} />
      {size(books) > 0 ? (
        <div className="container mx-auto relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4  ">
>>>>>>> efec5dfe41a37f7b0242d8f51e4d694a89d51f57
            {books.map((book) => (
              <BookList book={book} key={book.id} />
            ))}
          </div>
          <BookPagination />
        </div>
      ) : (
        <>Search Book Here</>
      )}
    </div>
  );
}

/**
 * Fetches data from the server and passes it as props to the Home component.
 *
 * @param {Object} context - The context object for the server-side rendering.
 * @param {Object} context.query - The query parameters received from the client.
 *
 * @returns {Object} An object containing the props to be passed to the Home component.
 */

export async function getServerSideProps(context) {
  const { query } = context;
  if (size(query) > 0) {
    const page = parseInt(query.page);
    const { data } = await client.query({
      query: GETALLBOOKS,
      variables: {
        input: {
          index: page > 1 ? page * 10 : 1,
          userquery: query.book,
          filter: query.filter ? query.filter : null,
        },
      },
    });
    return {
      props: {
        books: data.books,
      },
    };
  } else {
    return {
      props: { books: null },
    };
  }
}
