import { useRouter } from 'next/router';

const usePagination = () => {
  const router = useRouter();
  const { query } = router;
  const { filter } = query;
  const index = parseInt(query.page);
  const handleChange = (event, value) => {
    console.log(query);
    if (filter) {
      router.push({
        pathname: '/',
        query: { book: query.book, page: value, filter: filter },
      });
    } else {
      router.push({ pathname: '/', query: { book: query.book, page: value } });
    }
  };

  return {
    handleChange,
    index,
  };
};

export default usePagination;
