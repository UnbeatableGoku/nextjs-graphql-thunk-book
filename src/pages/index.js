import SearchBox from '@components/SearchBox';
import { size } from 'lodash';
import { client } from 'src/graphql/client';
import { GETALLBOOKS } from 'src/graphql/query';
import BookList from '@components/BookList';
import PropTypes from 'prop-types';
import BookPagination from '@components/BookPagination';
/**
 * Represents a book object.
 *
 * @typedef {Object} Book
 * @property {string} id - The unique identifier of the book.
 * @property {object} saleInfo - Information about the book's sale.
 * @property {object} volumeInfo - Information about the volume/book.
 */

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
    <div className='bg-slate-200 text-black'>
      <SearchBox books={books} />
      {size(books) > 0 ? (
        <div className='container mx-auto relative'>
          <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4  '>
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
Home.propTypes = {
  id: PropTypes.string,
  saleInfo: PropTypes.object,
  volumeInfo: PropTypes.object,
};

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
