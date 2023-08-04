import Image from 'next/image';
import Link from 'next/link';

import { Rating } from 'react-simple-star-rating';

import PropTypes from 'prop-types';
import useBookList from 'src/talons/useBookList';

/**
 * Represents a single book item in the book list.
 *
 * @param {Object} book - The book object to be displayed.
 * @param {string} book.id
 *
 * @param {Object} book.saleInfo
 * @param {string} book.saleInfo.saleability
 * @param {string} book.saleInfo.buyLink
 *
 * @param {Object} book.volumeInfo
 * @param {string} book.volumeInfo.title
 * @param {number} book.volumeInfo.averageRating
 * @param {string} book.volumeInfo.description
 * @param {Object} book.volumeInfo.imageLinks
 * @param {string} book.volumeInfo.imageLinks.thumbnail
 *
 *
 * @returns {JSX.Element} The JSX representation of the BookList component.
 */

const BookList = ({ book }) => {
  const { handleBookCompare, handleBookRemoveCompare, compareBook } =
    useBookList();

  const img = book.volumeInfo.imageLinks?.thumbnail
    ? book.volumeInfo.imageLinks.thumbnail
    : 'https://media.istockphoto.com/id/1222357475/vector/image-preview-icon-picture-placeholder-for-website-or-ui-ux-design-vector-illustration.jpg?s=612x612&w=0&k=20&c=KuCo-dRBYV7nz2gbk4J9w1WtTAgpTdznHu55W9FjimE=';
  const title = book.volumeInfo.title;
  const saleInfo =
    book.saleInfo.saleability === 'FOR_SALE' ? 'For Sale' : 'Not For Sale';
  const buyLink =
    book.saleInfo.saleability === 'FOR_SALE' ? book.saleInfo.buyLink : null;
  const avgRating = book.volumeInfo.averageRating
    ? book.volumeInfo.averageRating
    : null;
  const description = book.volumeInfo.description
    ? book.volumeInfo.description.slice(0, 70)
    : 'No Description Available';
  return (
    <div className='max-w-[250px] w-full   mx-auto m-3 bg-gray-100 rounded-md  relative overflow-hidden transition-all duration-300  hover:max-w-[280px] shadow-md shadow-violet-500 hover:shadow-violet-950 hover:shadow-lg  '>
      <div className='  h-full rounded-md border border-slate-300   '>
        <div className='h-[250px] pt-3'>
          <Image
            src={img}
            alt={title}
            width={250}
            height={250}
            className=' object-contain w-full h-full '
          />
        </div>
        <div className='font-light py-2 px-3 text-xl  text-slate-950 uppercase'>
          {title.slice(0, 14)}...
        </div>

        <div
          className={`absolute top-1 right-1 w-36 shadow-md shadow-black text-center font-bold p-2  text-xs transform rotate-45 -translate-y-1/2 translate-x-1/2 ${
            saleInfo === 'For Sale' ? 'bg-green-800' : 'bg-red-800'
          } text-white m-7`}
        >
          {saleInfo}
        </div>

        {avgRating ? (
          <div className='px-3 '>
            <Rating
              initialValue={avgRating}
              allowFraction={true}
              iconsCount={5}
              readonly={true}
              size={14}
              fillColor={'#4b0082'}
            />
          </div>
        ) : (
          <div className='px-3 text-red-700'>No Rating</div>
        )}
        <div>
          <div className='px-3 pt-3 text-gray-500 font-medium'>
            {description}...
          </div>
          {compareBook.includes(book.id) ? (
            <button
              onClick={() => handleBookRemoveCompare(book.id)}
              className='bg-red-400 text-white font-bold px-3 py-2  rounded-sm m-3 hover:bg-red-700 hover:text-white'
            >
              Remove
            </button>
          ) : (
            <button
              onClick={() => handleBookCompare(book.id)}
              className='bg-indigo-400 text-white font-bold px-3 py-2  rounded-sm m-3 hover:bg-indigo-700 hover:text-white'
            >
              Compare
            </button>
          )}
        </div>
      </div>
      {saleInfo === 'For Sale' && (
        <div className='absolute bottom-4 cursor-pointer right-2'>
          <Link href={`${buyLink}`}>
            <img
              src={
                'https://seeklogo.com/images/G/google-play-books-logo-FB96539C88-seeklogo.com.png'
              }
              width={27}
            />
          </Link>
        </div>
      )}
    </div>
  );
};

// PropTypes for the 'book' prop
BookList.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string,

    volumeInfo: PropTypes.shape({
      title: PropTypes.string.isRequired,
      averageRating: PropTypes.number,
      description: PropTypes.string,
      imageLinks: PropTypes.shape({
        thumbnail: PropTypes.string,
      }),
    }),
    saleInfo: PropTypes.shape({
      saleability: PropTypes.oneOf(['FOR_SALE', 'NOT_FOR_SALE']).isRequired,
      buyLink: PropTypes.string,
    }).isRequired,
  }).isRequired,
};
export default BookList;
