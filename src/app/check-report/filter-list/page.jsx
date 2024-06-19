import React from "react";
import { Box } from "@mui/material";

const FilterList = () => {
  return (
    <div className="flex justify-center">
      <Box
        sx={{
          border: "1px solid grey",
          borderRadius: "15px",
          width: { md: "30vw" },
          height: "90vh",
          marginTop: 5,
          boxShadow: 5,
        }}
      >
        <h1 className="text-center mt-2 font-serif text-lg text-gray-800">
          Saved Filtered List
        </h1>
        <Box
          sx={{
            border: "1px solid grey",
            borderRadius: "15px",
            width: "90%",
            height: "65%",
            marginTop: 1,
            boxShadow: 5,
            marginX: "auto",
          }}
        ></Box>
      </Box>
    </div>
  );
};

export default FilterList;
