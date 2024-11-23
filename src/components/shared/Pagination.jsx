import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const CustomPagination = ({ currentPage, totalPages, onPageChange }) => {
  const { theme } = useContext(ThemeContext);

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
            color: theme === "light" ? "#272B5A" : "#E8D8B7",
            "&:hover": {
              backgroundColor: theme === "light" ? "#71bcff" : "#9a1919",
            },
          },
          "& .MuiPaginationItem-root.Mui-selected": {
            backgroundColor: theme === "light" ? "#71bcff" : "#9a1919", 
          },
        }}
      />
    </Stack>
  );
};

export default CustomPagination;
