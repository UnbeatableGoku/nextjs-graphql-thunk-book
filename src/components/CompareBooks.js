import { size } from 'lodash';
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
    <div className='grid grid-cols-1 sm:grid-cols-6 md:grid-cols-6 lg:grid-cols-1 mt-20 mx-10  '>
      {size(compareProduct) > 0 ? (
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