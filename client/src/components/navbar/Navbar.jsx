import React from "./Navbar.scss";
import { Link } from "react-router-dom";
import { useContext } from "react";

import { Context } from "../../context/Context";

export default function Navbar() {
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/";

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <div className="navbar">
      <div className="navbarLeft">
        <i className="navbarIcon__logo fa-brands fa-square-facebook" />
        <i className="navbarIcon__logo fa-brands fa-square-instagram" />
        <i className="navbarIcon__logo fa-brands fa-square-twitter" />
      </div>
      <div className="navbarCenter">
        <ul className="navbarList">
          <li className="navbarList__item">
            <Link to="/" className="reactRouter__Link">
              Home
            </Link>
          </li>
          <li className="navbarList__item">
            <Link to="/read" className="reactRouter__Link">
              Read
            </Link>
          </li>
          <li className="navbarList__item">
            <Link to="/listen" className="reactRouter__Link">
              Listen
            </Link>
          </li>
          <li className="navbarList__item">
            <Link to="/shop" className="reactRouter__Link">
              Shop
            </Link>
          </li>
          <li className="navbarList__item">
            <Link to="/contact" className="reactRouter__Link">
              Contact
            </Link>
          </li>
          <li className="navbarList__item" onClick={handleLogout}>
            {user && "Logout"}
          </li>
        </ul>
      </div>
      <div className="navbarRight">
        {user ? (
          <>
            <Link to={"/settings"}>
              <img
                className="navbarImage"
                src={PF + user.profilePicture}
                alt="profile"
              />
            </Link>
            <ul className="navbarList">
              <li className="navbarList__item">
                <Link
                  to="/write"
                  className="reactRouter__Link"
                  style={{ marginLeft: "10px" }}
                >
                  Write
                </Link>
              </li>
            </ul>
          </>
        ) : (
          <ul className="navbarList">
            <li className="navbarList__item">
              <Link to="/login" className="reactRouter__Link">
                Login
              </Link>
            </li>
            <li className="navbarList__item">
              <Link to="/register" className="reactRouter__Link">
                Register
              </Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}
