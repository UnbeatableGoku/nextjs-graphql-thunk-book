//hooks
import useCompareBooks from 'src/talons/useCompareBooks';

//third-party
import { size } from 'lodash';

//imports
import React from 'react';

/**
 * The CompareBooks component displays a comparison table for a list of books.
 * @returns {JSX.Element} JSX element representing the CompareBooks component.
 */
const CompareBooks = () => {
  const {
    compareProduct,
    compareProductAttributes,
    productImg,
    handleGetBack,
    handleClearAllBooks,
    loading,
  } = useCompareBooks();
  if (loading) {
    return (
      <div class='h-screen bg-white'>
        <div class='flex justify-center items-center h-full'>
          <img
            class='h-16 w-16'
            src='https://icons8.com/preloaders/preloaders/1488/Iphone-spinner-2.gif'
            alt=''
          />
        </div>
      </div>
    );
  }
  return (
    <div className=' mt-20  mx-auto  max-w-[1200px] w-full '>
      <div className=' flex justify-between    items-center'>
        {size(compareProduct) > 0 && (
          <button
            className='p-2 bg-indigo-400 text-white mb-5'
            onClick={() => {
              handleClearAllBooks();
            }}
          >
            Clear All Books
          </button>
        )}
        <button
          onClick={() => handleGetBack()}
          className='p-2  bg-indigo-400 text-white mb-5'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width={24}
            height={24}
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='1.25'
            strokeLinecap='round'
            strokeLinejoin='round'
            className='lucide lucide-arrow-left-circle'
          >
            <circle cx={12} cy={12} r={10} />
            <path d='M16 12H8' />
            <path d='m12 8-4 4 4 4' />
          </svg>
        </button>
      </div>
      {size(compareProduct) > 0 ? (
        <div className='overflow-scroll sm:overflow-hidden w-full'>
          <table className=' border-collapse table-fixed w-full  '>
            <thead>
              <tr>
                <th className='p-2 border text-left capitalize font-medium'>
                  Image
                </th>
                {productImg.map((product, index) => (
                  <td className='p-2 border ' key={index}>
                    <img
                      className=' w-32 only: object-cover mx-auto'
                      src={`${product}`}
                      alt='img'
                    />
                  </td>
                ))}
              </tr>
            </thead>
            <tbody>
              {compareProductAttributes.map((attribute, attrIndex) => (
                <tr
                  key={attrIndex}
                  className={`  ${
                    attrIndex % 2 == 0 ? 'bg-slate-200' : 'bg-slate-50'
                  }`}
                >
                  <th className='p-2 border  text-left capitalize font-medium'>
                    {attribute}
                  </th>
                  {compareProduct.map((product, productIndex) => (
                    <td
                      className={`p-2 border  font-light `}
                      key={productIndex}
                    >
                      {product[attrIndex]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className=' mt-10 flex justify-center items-center   '>
          <h1 className='text-3xl mx-2'>No Books Found For Compare!</h1>
          <div>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width={46}
              height={46}
              viewBox='0 0 24 24'
              fill='none'
              stroke='#ff0000'
              strokeWidth={2}
              strokeLinecap='round'
              strokeLinejoin='round'
              className='lucide lucide-alert-circle'
            >
              <circle cx={12} cy={12} r={10} />
              <line x1={12} x2={12} y1={8} y2={12} />
              <line x1={12} x2='12.01' y1={16} y2={16} />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
};

export default CompareBooks;
