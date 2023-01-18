import { Link } from "react-router-dom";

import "./Register.scss";

export default function Register() {
  return (
    <div className="register">
      <span className="register__Title">Register</span>
      <form className="register__Form">
        <label>Username</label>
        <input
          type="text"
          className="register__Input"
          placeholder="Enter your username"
        />
        <label>Email</label>
        <input
          type="text"
          className="register__Input"
          placeholder="Enter your email"
        />
        <label>Password</label>
        <input
          type="password"
          className="register__Input"
          placeholder="Enter your password"
        />
        <button className="register__Button">Register</button>
      </form>
      <button className="register__LoginButton">
        <Link to="/login" className="reactRouter__Link">
          Login
        </Link>
      </button>
    </div>
  );
}
