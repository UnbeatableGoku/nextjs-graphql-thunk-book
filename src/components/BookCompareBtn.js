import React from 'react';
import useBookCompareBtn from 'src/talons/useBookCompareBtn';

const BookCompareBtn = () => {
  const { compareBook } = useBookCompareBtn();
  return (
    <div className='relative'>
      <div className='bg-slate-200 inline-block p-2 rounded font-bold hover:cursor-pointer justify-end'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width={30}
          height={30}
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='1.25'
          strokeLinecap='round'
          strokeLinejoin='round'
          className='lucide lucide-git-compare'
        >
          <circle cx={18} cy={18} r={3} />
          <circle cx={6} cy={6} r={3} />
          <path d='M13 6h3a2 2 0 0 1 2 2v7' />
          <path d='M11 18H8a2 2 0 0 1-2-2V9' />
        </svg>
      </div>
      <div className='absolute bg-red-900 text-white bottom-8 left-8 rounded-xl px-1'>
        {compareBook.length}
      </div>
    </div>
  );
};

export default BookCompareBtn;
