"use client";
import React, { useEffect, useState } from "react";
import { Box, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import HistoryToggleOffIcon from "@mui/icons-material/HistoryToggleOff";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useRouter } from "next/navigation";

const SavedList = () => {
  const [sampleData, setSampleData] = useState([]);
  const router = useRouter();

  useEffect(() => {
    try {
      fetch("http://127.0.0.1:8000/whatsapp/create-schedule/", {
        method: "get",
      }).then((response) => {
        response.json().then((result) => {
          setSampleData(result);
        });
      });
    } catch (e) {
      console.log(e);
    }
  }, []);
  return (
    <div className="flex justify-center">
      <Box
        sx={{
          border: "1px solid grey",
          borderRadius: "15px",
          width: { md: "30vw", xs: "95vw" },
          minHeight: "70vh",
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
        >
          {sampleData &&
            sampleData.map((task, i) => (
              <ListItem
                sx={{
                  cursor: "pointer",
                  margin: 1,
                  border: "1px solid gray",
                  width: "97%",
                  borderRadius: 2,
                }}
                onClick={() => router.push(`/check-report/${task.id}`)}
              >
                <ListItemText>File {i + 1}</ListItemText>
                <ListItemText> {task.schedule_date}</ListItemText>
                <ListItemIcon>
                  {task.status === "pending" ? (
                    <HistoryToggleOffIcon color="warning" />
                  ) : (
                    <CheckCircleIcon color="success" />
                  )}
                </ListItemIcon>
              </ListItem>
            ))}
        </Box>
      </Box>
    </div>
  );
};

export default SavedList;
