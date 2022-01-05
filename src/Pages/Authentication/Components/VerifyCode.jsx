/** packages */
import React from "react";
import { Button, TextField } from "@mui/material";

/** context */
import { useRegisterUserDataLayerValue } from "../../../Context/RegisterDataLayer";
import { Link } from "react-router-dom";

export default function VerifyCode() {
  const [{ temp_email }, dispatch] = useRegisterUserDataLayerValue();
  const [verifyCode, setVerifyCode] = React.useState("");

  /** @dev handle code verification with api call */
  const handleVerifyCode = () => {
    /**
     * @dev type "SET_ACTIVE_REGISTER_USER_PAGE" must be
     * dispatched only after successful verification of code
     * */
    dispatch({
      type: "SET_ACTIVE_REGISTER_USER_PAGE",
      payload: {
        active_register_user_page: "register_user_data",
      },
    });
  };

  /** @dev chaange screen back to email */
  const handleBackToEmail = () => {
    dispatch({
      type: "SET_ACTIVE_REGISTER_USER_PAGE",
      payload: {
        active_register_user_page: "email_registration",
      },
    });
  };

  return (
    <div className="verifyCode__container">
      <b>
        Enter the code we've sent by email to
        <br />
        {temp_email}
      </b>

      <TextField
        label="Enter 6 digit code"
        variant="outlined"
        value={verifyCode}
        onChange={(e) => setVerifyCode(e.target.value)}
      />

      <div className="verifyCode__container__buttons">
        <Button className="email" onClick={handleBackToEmail}>Change Email</Button>
        <Button onClick={handleVerifyCode}>Verify</Button>
      </div>

      <div className="verifyCode__container__customerSupport">
        <span>If you face issues, please </span>
        <Link to-="/auth/login">contact us</Link>
      </div>
    </div>
  );
}
