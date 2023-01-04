import "./Login.scss";

export default function Login() {
  return (
    <div className="login">
      <span className="login__Title">Login</span>
      <form className="login__Form">
        <label>Email</label>
        <input
          type="text"
          className="login__Input"
          placeholder="Enter your email"
        />
        <label>Password</label>
        <input
          type="password"
          className="login__Input"
          placeholder="Enter your password"
        />
        <button className="login__Button">Login</button>
      </form>
      <button className="login__RegisterButton">Register</button>
    </div>
  );
}
