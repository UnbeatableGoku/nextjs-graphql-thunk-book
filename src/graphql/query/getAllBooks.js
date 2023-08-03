import { gql } from '@apollo/client';

const allBooks = gql`
  query getBooks($input: criteria!) {
    books(input: $input) {
      id
      volumeInfo {
        title
        description
        authors
        averageRating
        publishedDate
        imageLinks {
          thumbnail
        }
      }
      saleInfo {
        saleability
        retailPrice {
          amount
        }
      }
    }
  }
`;
export default allBooks;
