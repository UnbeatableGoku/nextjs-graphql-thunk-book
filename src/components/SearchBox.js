//hooks
import { useSearchBox } from 'src/talons/useSearchBox';

//components
import Filter from './Filter';
import BookCompareBtn from './BookCompareBtn';

//third-party
import { size } from 'lodash';

//imports
import React from 'react';
import Link from 'next/link';

//prop-types
import PropTypes from 'prop-types';
/**
 * A search box component with a search input and submit button.
 *
 * Parent component is index.js (pages)
 *
 * @param {Object} props
 * @param {Array} props.books
 * @returns {JSX.Element} The JSX representation of the search box component.
 */
const SearchBox = ({ books }) => {
  const { handleSubmit, register, handleSearchQuery } = useSearchBox();

  return (
    <div>
      <div className='bg-gradient-to-tr  from-slate-100 to-slate-500  sm:rounded-b-3xl mx-auto px-10 py-6 sm:py-12 w-full mb-5'>
        <div className='max-w-xl mx-auto flex   items-center justify-between '>
          <form
            onSubmit={handleSubmit(handleSearchQuery)}
            className='flex-grow'
          >
            <div className='flex '>
              <div className='rounded-md overflow-hidden  max-w-[500px] w-full flex mx-auto border border-indigo-400'>
                <input
                  type='text'
                  {...register('query')}
                  placeholder='Enter Book Name...'
                  className=' rounded-r-none  focus:rounded-r-none rounded-md p-3  w-full h-full   outline-none'
                />
                <input
                  className='bg-indigo-700 text-white text-lg font-semibold  cursor-pointer rounded-r-md  border-none transition-all duration-500 hover:bg-indigo-500 h-full p-3'
                  type='submit'
                  value='Go'
                />
              </div>
            </div>
          </form>
          {size(books) > 0 && (
            <div className='flex items-center'>
              <div className='ps-2'>
                <Filter />
              </div>
              <Link href={'/book/compare'}>
                <div className='ps-2'>
                  <BookCompareBtn />
                </div>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

SearchBox.propTypes = {
  books: PropTypes.array.isRequired,
};
export default SearchBox;
