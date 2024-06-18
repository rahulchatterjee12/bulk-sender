import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React from "react";

const BulkSender = () => {
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
          Whatsapp Bulk Sender
        </h1>
        <div className="mx-5">
          <FormControl
            fullWidth
            size="small"
            sx={{
              marginY: 1,
            }}
          >
            <InputLabel id="demo-simple-select-label">
              Select Account
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Select Account"
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <div className="my-1 flex justify-between gap-2">
            <FormControl size="small" fullWidth>
              <InputLabel id="demo-simple-select-label">
                Select Account
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Select Account"
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <TextField size="small" label="Add Manually" />
          </div>
          <TextField
            size="small"
            sx={{
              marginY: 1,
            }}
          />
          <TextField
            label="Message"
            multiline
            rows={4}
            defaultValue="Type Message"
            sx={{
              marginY: 1,
            }}
            size="small"
          />
          <TextField
            size="small"
            type="file"
            sx={{
              marginY: 1,
            }}
          />
          <InputLabel
            sx={{
              font: 10,
            }}
          >
            Add Schedule(Seconds)
          </InputLabel>
          <div className="my-1 flex justify-between items-center gap-1">
            <TextField size="small" />
            To
            <TextField size="small" />
          </div>
          <FormControl
            size="small"
            fullWidth
            sx={{
              marginY: 1,
            }}
          >
            <InputLabel id="demo-simple-select-label">Days</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Days"
              multiple
              value={[]}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>

          <div className="flex justify-between gap-2">
            <TextField
              size="small"
              type="number"
              label="Continue For(weeks)"
              sx={{
                marginY: 1,
              }}
            />
            <TextField
              size="small"
              label="Schedule Time"
              type="time"
              sx={{
                marginY: 1,
              }}
            />
          </div>
        </div>
      </Box>
    </div>
  );
};

export default BulkSender;
