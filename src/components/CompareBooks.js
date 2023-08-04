import React from 'react';
import useCompareBooks from 'src/talons/useCompareBooks';

const CompareBooks = () => {
  const { compareProduct, compareProductAttributes, productImg } =
    useCompareBooks();
  return (
    <div className='max-w-[950px] w-full mx-auto mt-10'>
      <table className='w-full border-collapse  '>
        <colgroup>
          <col style={{ width: '200px' }} />{' '}
          {/* Set the width for the first column */}
          {/* Add more col elements with widths for other columns as needed */}
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
