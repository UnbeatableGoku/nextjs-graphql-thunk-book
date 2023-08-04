import { Pagination, Stack } from '@mui/material';
import usePagination from 'src/talons/usePagination';

const BookPagination = () => {
  const { handleChange, index } = usePagination();
  return (
    <Stack
      spacing={2}
      display='flex'
      justifyContent='center'
      direction='row'
      mt={10}
    >
      <Pagination
        count={10}
        variant='outlined'
        page={index}
        shape='rounded'
        onChange={handleChange}
      />
    </Stack>
  );
};

export default BookPagination;
