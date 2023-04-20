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
        <a
          href="https://twitter.com/UtahJazzShow"
          target="_blank"
          rel="noreferrer"
        >
          <i className="navbarIcon__logo fa-brands fa-square-twitter" />
        </a>
        <a
          href="https://www.facebook.com/theutahjazzshow/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="navbarIcon__logo fa-brands fa-square-facebook" />
        </a>
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
            <Link to="/contact" className="reactRouter__Link">
              Contact
            </Link>
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
                style={{ marginRight: "10px" }}
              />
            </Link>
            <ul className="navbarList">
              <li className="navbarList__item" onClick={handleLogout}>
                <Link to="/" className="reactRouter__Link">
                  {user && "Logout"}
                </Link>
              </li>
            </ul>
          </>
        ) : (
          <ul className="navbarList">
            <li className="navbarList__item">
              <Link to="/login" className="reactRouter__Link">
                <i class="fa-regular fa-user"></i>
              </Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}
