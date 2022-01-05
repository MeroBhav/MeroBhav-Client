import "./styles/login.css";

import Blob from '../../Assets/blob2.png'

import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="login__container">
      <img className="blob" src={Blob} alt="blob" />
      
      <h1>Welcome Back 👋</h1>

      <form>
        <div className="login__container__inputContainer margin">
          <i className="ri-at-line"></i>
          <input type="email" placeholder="Email" />
        </div>

        <div className="login__container__inputContainer">
          <i className="ri-key-2-line"></i>
          <input type="password" placeholder="Password" />
        </div>

        <Link className="forgotPassword" to="/">Forgot Password?</Link>
        <button>Log in</button>
      </form>

      <div className="divider">
        <div className="blob"></div>
        <p>OR</p>
        <div className="blob"></div>
      </div>

      <button className="login__container__socialLogin">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png"
          alt="google"
        />
        <span>Sign in with Google</span>
      </button>

      <div className="login__container__signup">
        <span>Don’t have an account?</span>
        <Link to="/auth/signup">Join now</Link>
      </div>
    </div>
  );
}
