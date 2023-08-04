import { gql } from '@apollo/client';

const getCompareBooks = gql`
  query Comparebooks($compareBook: [String]) {
    comparebooks(compareBook: $compareBook) {
      id
      volumeInfo {
        title
        averageRating
        publishedDate
        imageLinks {
          thumbnail
        }
      }
    }
  }
`;

export default getCompareBooks;
