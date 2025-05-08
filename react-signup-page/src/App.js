import React, { useState } from "react";
import "./App.css";

function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmpassword] = useState("");

  const showValues = () => {
    alert(
      `Email: ${email}\nPassword: ${password}\nConfirmpassword: ${confirmPassword}`
    );
  };

  return (
    <div>
      <div className="container">
        <h1 className="log-header">Signup</h1>
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
          <input
            id="password"
            className="login-input"
            placeholder="Confirm your password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="button" className="log-in-button" onClick={showValues}>
            Signup
          </button>
        </form>
        <p className="forgot-password-account">already have an account?login</p>
      </div>
    </div>
  );
}

export default SignupPage;
