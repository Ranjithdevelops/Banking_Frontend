import React, { useState } from "react";
import "./Signup.css";
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
function Signup() {
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");
  const [retypepassword, setretypepassword] = useState("");
  const [error, setError] = useState("");
  const handlesubmit = (e) => {
    e.preventDefault();
    if (username === "" || password === "" || retypepassword === "") {
      setError("All the fields are required");
      return;
    }
    const newuser = { username, password, retypepassword };
  };
  return (
    <div className="signup">
      <div className="card">
        <h2>Signup</h2>
        <form onSubmit={handlesubmit}>
          <div>
            <Input
              type="text"
              value={username}
              onChange={(e) => setusername(e.target.value)}
              placeholder="username"
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
          <div>
            <Input
              type="password"
              value={retypepassword}
              onChange={(e) => setretypepassword(e.target.value)}
              placeholder="Retype Password"
            />
          </div>
          {error && <Error>{error}</Error>}
          <Button type="submit">Signup</Button>
          <br />
          <p>
            Already have a account? <a href="">Login</a>
          </p>
        </form>
      </div>
    </div>
  );
}
export default Signup;
