import { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { DateTimePicker } from "@mui/x-date-pickers";
import { TextField, Stack } from "@mui/material";
function MuiDatePicker() {
  const [value, setValue] = useState(null);
  const [time, setTime] = useState(null);
  const [dateTime, setDateTime] = useState(null);
  // console.log({ time: time && time.toLocaleTimeString() });
  console.log(dateTime);
  return (
    <Stack
      spacing={4}
      sx={{
        width: "250px",
      }}
    >
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label="Select Date"
          value={value}
          onChange={(newValue) => setValue(newValue)}
          renderInput={(props) => <TextField {...props} />}
        />
        <TimePicker
          label="Select Time"
          value={time}
          onChange={(newValue) => setTime(newValue)}
          renderInput={(props) => <TextField {...props} />}
        />

        <DateTimePicker
          label="Select Date & Time"
          value={dateTime}
          onChange={(newValue) => setDateTime(newValue)}
          renderInput={(props) => <TextField {...props} />}
        />
      </LocalizationProvider>
    </Stack>
  );
}

export default MuiDatePicker;
