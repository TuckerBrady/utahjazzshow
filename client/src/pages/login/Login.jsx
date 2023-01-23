import axios from "axios";
import { useRef, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";

import "./Login.scss";

export default function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };

  return (
    <div className="login">
      <span className="login__Title">Login</span>
      <form className="login__Form" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          className="login__Input"
          placeholder="Enter your Username"
          ref={userRef}
        />
        <label>Password</label>
        <input
          type="password"
          className="login__Input"
          placeholder="Enter your password"
          ref={passwordRef}
        />
        <button className="login__Button" type="submit" disabled={isFetching}>
          Login
        </button>
      </form>
      <button className="login__RegisterButton">
        <Link to="/register" className="reactRouter__Link">
          Register
        </Link>
      </button>
    </div>
  );
}
