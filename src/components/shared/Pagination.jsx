import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const CustomPagination = ({ currentPage, totalPages, onPageChange }) => {
  const handleChange = (event, value) => {
    onPageChange(value); 
  };

  return (
    <Stack spacing={5} alignItems="center" className="mt-4">
      <Pagination
        count={totalPages} 
        page={currentPage} 
        onChange={handleChange} 
        sx={{
          "& .MuiPaginationItem-root": {
            fontSize: "1.3rem", 
          },
        }}
      />
    </Stack>
  );
};

export default CustomPagination;
