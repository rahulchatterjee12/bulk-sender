import React from "react";
import {
  Box,
  Button,
  LinearProgress,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

const CheckReport = () => {
  const sampleData = [
    { id: 1, result: "9563549863", status: "Sent" },
    { id: 2, result: "9563549863", status: "Spammed" },
    { id: 3, result: "9563549863", status: "Not Sent" },
  ];
  return (
    <div className="flex justify-center items-center h-screen">
      <Box
        sx={{
          border: "2px solid #6667AB",
          borderRadius: "15px",
          width: { md: "30vw" },
          padding: "20px",
          boxShadow: 5,
          backgroundColor: "#FFFFFF",
        }}
      >
        <Typography
          variant="h5"
          className="text-center font-serif text-lg text-gray-800 mb-4"
        >
          Check Report
        </Typography>

        <div className="mb-4">
          <div className="flex items-center justify-between mb-2 gap-3">
            <LinearProgress
              variant="determinate"
              value={99}
              className="w-3/4 mr-2 bg-gray-300"
            />
            <Typography className="w-12 text-right text-gray-800">
              99%
            </Typography>
            <Typography className="w-16 ml-2 text-gray-800">Sent</Typography>
          </div>
          <div className="flex items-center justify-between mb-2 gap-3">
            <LinearProgress
              variant="determinate"
              value={0}
              className="w-3/4 mr-2 bg-gray-300"
            />
            <Typography className="w-12 text-right text-gray-800">
              0%
            </Typography>
            <Typography className="w-16 ml-2 text-gray-800">Spammed</Typography>
          </div>
          <div className="flex items-center justify-between gap-3">
            <LinearProgress
              variant="determinate"
              value={0}
              className="w-3/4 mr-2 bg-gray-300"
            />
            <Typography className="w-12 text-right text-gray-800">
              0%
            </Typography>
            <Typography className="w-16 ml-2 text-gray-800">
              Not Sent
            </Typography>
          </div>
        </div>

        <Table sx={{ border: "1px solid rgb(59 130 246)" }}>
          <TableHead>
            <TableRow>
              <TableCell className="border-r border-b border-blue-500">
                Sl No.
              </TableCell>
              <TableCell className="border-r border-b border-blue-500">
                Results Found
              </TableCell>
              <TableCell className="border-b border-blue-500">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sampleData.map((row) => (
              <TableRow key={row.id}>
                <TableCell className="border border-blue-500">
                  {row.id}
                </TableCell>
                <TableCell className="border border-blue-500">
                  {row.result}
                </TableCell>
                <TableCell className="border border-blue-500">
                  {row.status}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <div className="flex justify-around mt-10">
          <Button
            variant="outlined"
            color="primary"
            className="border border-blue-500 text-blue-500"
          >
            Re Send
          </Button>
          <Button
            variant="outlined"
            color="primary"
            className="border border-blue-500 text-blue-500"
          >
            Filter List
          </Button>
          <Button
            variant="outlined"
            color="primary"
            className="border border-blue-500 text-blue-500"
          >
            Filtered
          </Button>
        </div>
      </Box>
    </div>
  );
};

export default CheckReport;
