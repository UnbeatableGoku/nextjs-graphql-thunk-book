//hooks
import usePagination from "src/talons/usePagination";

//third party
import { Pagination, Stack } from "@mui/material";

/**
 * A pagination component to display page navigation for book list.
 * @returns {JSX.Element} The JSX representation of the BookPagination component.
 */
const BookPagination = () => {
  const { handleChange, index } = usePagination();
  return (
    <Stack
      spacing={2}
      display="flex"
      justifyContent="center"
      direction="row"
      mt={10}
    >
      <Pagination
        count={10}
        variant="outlined"
        page={index}
        shape="rounded"
        onChange={handleChange}
      />
    </Stack>
  );
};

export default BookPagination;
