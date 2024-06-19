import React from "react";
import {
  Box,
  Button,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";

const SavedList = () => {
  const files = ["FILE 1", "FILE 2", "FILE 3"];
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
          Filtered Save List
        </Typography>

        <Box
          sx={{
            border: "1px solid #6667AB",
            borderRadius: "10px",
            padding: "10px",
            marginBottom: "20px",
          }}
        >
          <Typography className="text-gray-800 mb-2">Files</Typography>
          <List>
            {files.map((file, index) => (
              <ListItem
                key={index}
                sx={{
                  border: "1px solid #6667AB",
                  borderRadius: "5px",
                  marginBottom: "10px",
                  backgroundColor: "#F3F4F6",
                }}
              >
                <ListItemText
                  primary={file}
                  primaryTypographyProps={{
                    className: "font-bold text-blue-600",
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Box>

        <Button
          variant="outlined"
          color="primary"
          className="border border-blue-500 text-blue-500 w-full"
        >
          Save
        </Button>
      </Box>
    </div>
  );
};

export default SavedList;
