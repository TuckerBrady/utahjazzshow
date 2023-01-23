import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "./Register.scss";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setError(false);
      const res = await axios.post("/auth/register", {
        username,
        email,
        password,
      });
      res.data && window.location.replace("/login");
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className="register">
      <span className="register__Title">Register</span>
      <form className="register__Form" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          className="register__Input"
          placeholder="Enter your username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Email</label>
        <input
          type="text"
          className="register__Input"
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          className="register__Input"
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="register__Button" type="submit">
          Register
        </button>
      </form>
      <button className="register__LoginButton">
        <Link to="/login" className="reactRouter__Link">
          Login
        </Link>
      </button>
      {error && <span>Something went wrong</span>}
    </div>
  );
}
