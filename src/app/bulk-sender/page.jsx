"use client";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useState } from "react";

const BulkSender = () => {
  const [account, setAccount] = useState("");
  const [csvFile, setCsvFile] = useState(null);
  const [manualInput, setManualInput] = useState("");
  const [message, setMessage] = useState("");
  const [additionalFile, setAdditionalFile] = useState(null);
  const [scheduleFrom, setScheduleFrom] = useState("");
  const [scheduleTo, setScheduleTo] = useState("");
  const [days, setDays] = useState([]);
  const [weeks, setWeeks] = useState("");
  const [time, setTime] = useState("");

  const handleCsvFileChange = (e) => {
    setCsvFile(e.target.files[0]);
  };

  const handleAdditionalFileChange = (e) => {
    setAdditionalFile(e.target.files[0]);
  };

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!account) newErrors.account = "Account is required";
    if (!manualInput && !csvFile)
      newErrors.input = "Either manual input or file is required";
    if (!message) newErrors.message = "Message is required";
    if (!scheduleFrom || !scheduleTo)
      newErrors.schedule = "Schedule is required";
    if (
      scheduleFrom &&
      scheduleTo &&
      parseInt(scheduleFrom) > parseInt(scheduleTo)
    )
      newErrors.schedule = "From time must be less than To time";
    if (!days.length) newErrors.days = "At least one day must be selected";
    if (!weeks) newErrors.weeks = "Weeks are required";
    if (!time) newErrors.time = "Time is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleReset = () => {
    setAccount("");
    setCsvFile(null);
    setManualInput("");
    setMessage("");
    setAdditionalFile(null);
    setScheduleFrom("");
    setScheduleTo("");
    setDays([]);
    setWeeks("");
    setTime("");
    setErrors({});
  };

  const handleSubmit = async () => {
    if (validate()) {
      const formData = new FormData();

      formData.append("account", account);
      formData.append("manual_input", manualInput);
      formData.append("message", message);
      formData.append("csv_file", csvFile);
      formData.append("additional_file", additionalFile);
      formData.append("schedule_from", scheduleFrom);
      formData.append("schedule_to", scheduleTo);
      formData.append("days", JSON.stringify(days));
      formData.append("weeks", weeks);
      formData.append("time", time);

      try {
        const response = await fetch(
          "http://127.0.0.1:8000/whatsapp/create-schedule/",
          {
            method: "POST",
            body: formData,
          }
        );
        const result = await response.json();
        console.log("Success:", result);
      } catch (error) {
        console.error("Error:", error);
      }

      console.log({
        account,
        manualInput,
        message,
        csvFile,
        scheduleFrom,
        scheduleTo,
        days,
        weeks,
        time,
      });
    }
  };

  return (
    <div className="flex justify-center">
      <Box
        sx={{
          border: "1px solid grey",
          borderRadius: "15px",
          width: { md: "30vw", xs: "90vw" },
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
            sx={{ marginY: 1 }}
            error={!!errors.account}
          >
            <InputLabel id="account-select-label">Select Account</InputLabel>
            <Select
              labelId="account-select-label"
              id="account-select"
              value={account}
              label="Select Account"
              onChange={(e) => setAccount(e.target.value)}
            >
              <MenuItem value={"1234567890"}>+91 123456 7890</MenuItem>
            </Select>
            {errors.account && (
              <span className="text-red-500 text-sm">{errors.account}</span>
            )}
          </FormControl>
          <div className="my-1 flex justify-between gap-2">
            <TextField
              type="file"
              size="small"
              onChange={handleCsvFileChange}
              error={!!errors.input}
            />
            <TextField
              size="small"
              label="Add Manually"
              value={manualInput}
              onChange={(e) => setManualInput(e.target.value)}
              error={!!errors.input}
            />
          </div>
          {errors.input && (
            <span className="text-red-500 text-sm">{errors.input}</span>
          )}
          <TextField
            label="Type Message"
            multiline
            rows={4}
            sx={{ marginY: 1 }}
            size="small"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            error={!!errors.message}
          />
          {errors.message && (
            <span className="text-red-500 text-sm">{errors.message}</span>
          )}
          <TextField
            size="small"
            type="file"
            sx={{ marginY: 1 }}
            onChange={handleAdditionalFileChange}
          />
          <InputLabel sx={{ font: 5, marginTop: 2 }}>
            Add Schedule(Seconds)
          </InputLabel>
          <div className="my-1 flex justify-between items-center gap-2">
            <TextField
              size="small"
              type="number"
              value={scheduleFrom}
              onChange={(e) => setScheduleFrom(e.target.value)}
              error={!!errors.schedule}
            />
            To
            <TextField
              size="small"
              type="number"
              value={scheduleTo}
              onChange={(e) => setScheduleTo(e.target.value)}
              error={!!errors.schedule}
            />
          </div>
          {errors.schedule && (
            <span className="text-red-500 text-sm">{errors.schedule}</span>
          )}
          <FormControl
            size="small"
            fullWidth
            sx={{ marginY: 1 }}
            error={!!errors.days}
          >
            <InputLabel id="days-select-label">Days</InputLabel>
            <Select
              labelId="days-select-label"
              id="days-select"
              multiple
              value={days}
              label="Days"
              onChange={(e) => setDays(e.target.value)}
            >
              <MenuItem value="sunday">Sunday</MenuItem>
              <MenuItem value="monday">Monday</MenuItem>
              <MenuItem value="tuesday">Tuesday</MenuItem>
              <MenuItem value="wednesday">Wednesday</MenuItem>
              <MenuItem value="thursday">Thursday</MenuItem>
              <MenuItem value="friday">Friday</MenuItem>
              <MenuItem value="saturday">Saturday</MenuItem>
            </Select>
            {errors.days && (
              <span className="text-red-500 text-sm">{errors.days}</span>
            )}
          </FormControl>
          <div className="flex justify-between gap-2 items-center">
            <TextField
              size="small"
              type="number"
              label="Continue For(weeks)"
              sx={{ marginY: 1 }}
              value={weeks}
              onChange={(e) => setWeeks(e.target.value)}
              error={!!errors.weeks}
            />
            <InputLabel sx={{ font: 10 }}>Schedule Time:</InputLabel>
            <TextField
              size="small"
              type="time"
              sx={{ marginY: 1 }}
              value={time}
              onChange={(e) => setTime(e.target.value)}
              error={!!errors.time}
            />
          </div>
          {errors.weeks && (
            <span className="text-red-500 text-sm">{errors.weeks}</span>
          )}
          {errors.time && (
            <span className="text-red-500 text-sm">{errors.time}</span>
          )}
          <div className="flex justify-around my-5 ">
            <Button
              color="inherit"
              variant="outlined"
              size="small"
              onClick={handleReset}
            >
              Reset All
            </Button>
            <Button
              color="inherit"
              variant="outlined"
              size="small"
              onClick={handleSubmit}
            >
              Send Messages
            </Button>
          </div>
        </div>
      </Box>
    </div>
  );
};

export default BulkSender;
