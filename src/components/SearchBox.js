import React from 'react';
import { useSearchBox } from 'src/talons/useSearchBox';
import Filter from './Filter';
import { size } from 'lodash';
import Link from 'next/link';
import BookCompareBtn from './BookCompareBtn';

/**
 * A search box component with a search input and submit button.
 * @param {Object} props
 * @param {Array} props.books
 * @returns {JSX.Element} The JSX representation of the search box component.
 */
const SearchBox = ({ books }) => {
  console.log(books ? books : 'this is null books --------------------');
  // Get the functions from the custom hook useSearchBox
  const { handleSubmit, register, handleSearchQuery } = useSearchBox();

  return (
    <div>
      <div className='bg-slate-300 rounded-b-3xl sm:rounded-b-full mx-auto px-10 py-6 sm:py-12 w-full mb-5'>
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
                  className='bg-indigo-400 text-white text-lg font-semibold  cursor-pointer rounded-r-md  border-none transition-all duration-500 hover:bg-indigo-500 h-full p-3'
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

export default SearchBox;
