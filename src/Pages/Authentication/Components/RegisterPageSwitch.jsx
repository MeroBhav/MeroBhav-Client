import "../styles/register.css";

import Blob2 from '../../../Assets/blob2.png'

/** packages */
import React from "react";

/** context */
import { useRegisterUserDataLayerValue } from "../../../Context/RegisterDataLayer";

/** components */
import Email from "./Email";
import VerifyCode from "./VerifyCode";
import UserRegistration from "./UserRegistration";

export default function RegisterPageSwitch() {
  const [{ active_register_user_page }] = useRegisterUserDataLayerValue();

  return (
    <div className="register__container">
      {active_register_user_page === "email_registration" && <Email />}
      {active_register_user_page === "verify_code" && <VerifyCode />}
      {active_register_user_page === "register_user_data" && <UserRegistration />}

      <img className="blob2" src={Blob2} alt="blob" />
    </div>
  );
}
