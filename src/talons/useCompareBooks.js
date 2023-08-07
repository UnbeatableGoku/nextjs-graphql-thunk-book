import { useLazyQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { GETCOMPAREBOOKS } from 'src/graphql/query';

/**
 * Custom hook to handle book comparison data.
 * @returns {{
 *  compareProduct: Array,
 *  productImg: Array,
 *  compareProductAttributes: Array,
 *  handleGetBack: () => void
 * }}
 */
const useCompareBooks = () => {
  const [fetchBooks, { error, data }] = useLazyQuery(GETCOMPAREBOOKS);
  const [compareProduct, setCompareProduct] = useState([]);
  const [productImg, setProductImg] = useState([]);
  const { compareBook } = useSelector((state) => state.book);
  const router = useRouter();

  /**
   * Formats the book data for comparison.
   * @param {Array<Object>} data - The book data to be formatted.
   * @returns {Array} The formatted book data.
   */
  const handleSetCompareProductData = useCallback((data) => {
    const newArry = [];
    const newData = data.map((item) => {
      return [
        ...newArry,
        item.volumeInfo.title,
        item.volumeInfo.averageRating ? item.volumeInfo.averageRating : null,
        item.volumeInfo.publishedDate ? item.volumeInfo.publishedDate : null,
      ];
    });
    return newData;
  }, []);

  /**
   * Formats the book image data for comparison.
   * @param {Array<Object>} data - The book data containing image links.
   * @returns {Array<Array<string>>} The formatted book image data.
   */
  const handleSetCompareProductImg = useCallback((data) => {
    const newArry = [];
    const newData = data.map((item) => {
      return [
        ...newArry,
        item.volumeInfo.imageLinks
          ? item.volumeInfo.imageLinks.thumbnail
          : 'https://media.istockphoto.com/id/1222357475/vector/image-preview-icon-picture-placeholder-for-website-or-ui-ux-design-vector-illustration.jpg?s=612x612&w=0&k=20&c=KuCo-dRBYV7nz2gbk4J9w1WtTAgpTdznHu55W9FjimE=',
      ];
    });
    return newData;
  }, []);

  useEffect(() => {
    if (data) {
      const newData = handleSetCompareProductData(data.comparebooks);
      const newProductImg = handleSetCompareProductImg(data.comparebooks);
      setCompareProduct(newData);
      setProductImg(newProductImg);
    }
  }, [data]);

  useEffect(() => {
    if (compareBook) {
      fetchBooks({
        variables: {
          compareBook,
        },
      });
    }
  }, [compareBook]);

  const compareProductAttributes = ['Title', 'Average', 'Published Date'];

  /**
   * Navigates back to the previous page using Next.js router.
   */
  const handleGetBack = useCallback(() => {
    router.back();
  }, [router]);

  return {
    compareProduct,
    productImg,
    compareProductAttributes,
    handleGetBack,
  };
};

export default useCompareBooks;
