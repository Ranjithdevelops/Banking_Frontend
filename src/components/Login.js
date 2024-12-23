import React, { useState } from "react";
import "./Login.css";

// Create Input, Button, and Error components to manage styling
const Input = ({ type, value, onChange, placeholder }) => (
  <input
    type={type}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    className="input"
  />
);

const Button = ({ type, children }) => (
  <button type={type} className="button">
    {children}
  </button>
);

const Error = ({ children }) => <div className="error">{children}</div>;

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "" || password === "") {
      setError("Both fields are required");
      return;
    }
    setError("");
    alert("Logged in");
  };

  return (
    <div className="login">
      <div className="card">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <Input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
            />
          </div>
          <div>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </div>
          {error && <Error>{error}</Error>}
          <Button type="submit">Login</Button>
        </form>
      </div>
    </div>
  );
}

export default Login;
