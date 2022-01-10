import React from "react";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function UserRegistration() {
  const [value, setValue] = React.useState(null);

  return (
    <div className="userRegistration__container">
      <b>You're almost there!</b>

      <form>
        <TextField label="Full Name" variant="outlined" />

        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            label="Date of Birth"
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>

        <TextField
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="outlined"
        />

        <Button className="userRegistration__container__submitBtn">Done</Button>

        <p>
          By continuing, you agree to MeroBhav's <Link to="/">Terms</Link> & <Link to="/">Privacy Policy</Link>
        </p>
      </form>
    </div>
  );
}
