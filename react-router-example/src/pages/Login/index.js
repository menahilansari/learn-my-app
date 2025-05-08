import "./style.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const showValues = () => {
    alert(`Email: ${email}\nPassword: ${password}`);
  };

  const _moveToSignUpPage = () => {
    navigate("/signup");
  };

  return (
    <div>
      <div className="container">
        <h1 className="log-header">Login</h1>
        <form>
          <input
            id="email"
            className="login-input"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            id="password"
            className="login-input"
            placeholder="Enter your password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p class="forgot-password-account">Forgot account?</p>

          <button type="button" className="log-in-button" onClick={showValues}>
            Login
          </button>
        </form>
        <p className="forgot-password-account">
          Don't have an account?<span onClick={_moveToSignUpPage}>Signup</span>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
