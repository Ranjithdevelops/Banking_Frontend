import React, { useState } from "react";
import "./Login.css";
import axios from "axios";
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
    const newUser = { username, password };

    axios
      .post("http://localhost:8081/Login", newUser, { withCredentials: true }) // URL and the data to send
      .then((response) => {
        console.log("User added successfully:", response.data);
        // Handle success (e.g., clear form or show success message)
      })
      .catch((error) => {
        console.error("There was an error adding the user:", error);
      });
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
          <br />
          <p>
            Create a new account? <a href="">signup</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
