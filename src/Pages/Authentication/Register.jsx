import React from "react";

import RegisterUserDataLayer from "../../Context/RegisterDataLayer";

import RegisterPageSwitch from "./Components/RegisterPageSwitch";

export default function Register() {
  return (
    <RegisterUserDataLayer>
      <RegisterPageSwitch />
    </RegisterUserDataLayer>
  );
}
