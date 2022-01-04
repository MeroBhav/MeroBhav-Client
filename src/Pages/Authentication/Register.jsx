import "./styles/register.css";

import React from "react";

import Email from "./Components/Email";

export default function Register() {
  const [state, changeState] = React.useState("email_registration");

  return (
    <div className="register__container">
      {/** @dev email registration */}
      {state === "email_registration" && <Email changeState={changeState} />}
    </div>
  );
}
