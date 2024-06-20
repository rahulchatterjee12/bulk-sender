"use client";
import React, { useEffect, useState } from "react";
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
import { usePathname } from "next/navigation";

const CheckReport = () => {
  const [sampleData, setSampleData] = useState();
  const [phoneNumbers, setPhoneNumbers] = useState([]);
  const [counts, setCounts] = useState();

  const id = usePathname().split("/")[2];
  useEffect(() => {
    try {
      fetch(`http://127.0.0.1:8000/whatsapp/schedule/${id}`, {
        method: "get",
      }).then((response) => {
        response.json().then((result) => {
          setSampleData(result);
          setPhoneNumbers(result.phone_numbers);
          const counts = result.phone_numbers.reduce((acc, item) => {
            acc[item.status] = (acc[item.status] || 0) + 1;
            return acc;
          }, {});
          setCounts(counts);
        });
      });
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      <Box
        sx={{
          border: "2px solid #6667AB",
          borderRadius: "15px",
          width: { md: "30vw", xs: "95vw" },
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
              value={counts?.send ? counts.send : 0}
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
              value={counts?.spammed ? counts.spammed : 0}
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
              value={counts?.not_send ? counts.not_send : 0}
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

        <Table sx={{ border: "1px solid #6667AB" }}>
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
            {phoneNumbers.map((row, index) => (
              <TableRow key={row.id}>
                <TableCell className="border-r border-blue-500">
                  {index + 1}
                </TableCell>
                <TableCell className="border border-blue-500">
                  {row.number}
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
