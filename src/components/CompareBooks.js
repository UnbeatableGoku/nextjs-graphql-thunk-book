import React from 'react';
import useCompareBooks from 'src/talons/useCompareBooks';

const CompareBooks = () => {
  const {
    compareProduct,
    compareProductAttributes,
    productImg,
    handleGetBack,
  } = useCompareBooks();
  return (
    <div className='max-w-[950px] w-full mx-auto mt-10'>
      <div>
        <button
          className='p-2 bg-indigo-500 text-white mb-2 rounded-sm'
          onClick={() => handleGetBack()}
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
      <table className='w-full border-collapse  '>
        <colgroup>
          <col style={{ width: '200px' }} />{' '}
        </colgroup>
        <thead>
          <tr>
            <th className='p-2 border text-center text-3xl font-normal'>
              Attribute
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
                <td className={`p-2 border  font-light `} key={productIndex}>
                  {product[attrIndex]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CompareBooks;
