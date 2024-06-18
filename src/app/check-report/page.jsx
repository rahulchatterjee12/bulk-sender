import { Box } from "@mui/material";
import React from "react";

const CheckReport = () => {
  return (
    <div className="flex justify-center">
      <Box
        sx={{
          border: "1px solid grey",
          borderRadius: "15px",
          width: "30vw",
          height: "90vh",
          marginTop: 5,
          boxShadow: 5,
        }}
      >
        <h1 className="text-center mt-2 font-serif text-lg text-gray-800">
          Check Report
        </h1>
        <Box
          sx={{
            border: "1px solid grey",
            borderRadius: "15px",
            width: "90%",
            height: "20%",
            marginTop: 1,
            boxShadow: 5,
            marginX: "auto",
          }}
        ></Box>

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

export default CheckReport;
