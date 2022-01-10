/** packages */
import React from "react";
import { TextField } from "@mui/material";
import { Link } from "react-router-dom";

/** context */
import { useRegisterUserDataLayerValue } from "../../../Context/RegisterDataLayer";

export default function Email() {
  const [data, dispatch] = useRegisterUserDataLayerValue();
  const [email, setEmail] = React.useState("");

  /**
   * @dev this same function is used for api call
   * * also validation is required
   */
  const handleEmailSubmission = (e) => {
    e.preventDefault();
    /** @dev data is to reduce warning */
    data &&
    dispatch({
      type: "SET_ACTIVE_REGISTER_USER_PAGE",
      payload: {
        active_register_user_page: "verify_code",
        temp_email: email,
      }
    });
  }

  return (
    <div className="register__email__container">
      <h1>Join MeroBhav 🦄</h1>
      <p>Join us with 50K+ other compassionate people</p>

      <form onSubmit={handleEmailSubmission}>
        <TextField label="Email" variant="outlined" value={email} onChange={e => setEmail(e.target.value)}/>
        <p>
          We never share your details with anyone and it won’t be displayed on
          your profile.
        </p>
        <button>Send Verification Code</button>
      </form>

      <div className="divider">
        <div className="blob"></div>
        <p>OR</p>
        <div className="blob"></div>
      </div>

      <button className="signup__container__socialSignUp">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png"
          alt="google"
        />
        <span>Sign up with Google</span>
      </button>

      <div className="signup__container__login">
        <span>Already a member?</span>
        <Link to="/auth/login">Login here</Link>
      </div>
    </div>
  );
}
