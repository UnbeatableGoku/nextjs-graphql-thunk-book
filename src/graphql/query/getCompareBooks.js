import { gql } from '@apollo/client';

const getCompareBooks = gql`
  query Comparebooks($compareBook: [String]) {
    comparebooks(compareBook: $compareBook) {
      id
      volumeInfo {
        title
        authors
        averageRating
        categories
        publishedDate
        imageLinks {
          thumbnail
        }
      }
    }
  }
`;

export default getCompareBooks;
