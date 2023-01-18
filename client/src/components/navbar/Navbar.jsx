import React from "./Navbar.scss";
import { Link } from "react-router-dom";

import { images } from "../../constants";

export default function Navbar() {
  const user = false;
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
            <Link to="/about" className="reactRouter__Link">
              About
            </Link>
          </li>
          <li className="navbarList__item">
            <Link to="/contact" className="reactRouter__Link">
              Contact
            </Link>
          </li>
          <li className="navbarList__item">
            <Link to="/write" className="reactRouter__Link">
              Write
            </Link>
          </li>
          <li className="navbarList__item">{user && "Logout"}</li>
        </ul>
      </div>
      <div className="navbarRight">
        {user ? (
          <img className="navbarImage" src={images.profile} alt="profile" />
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
        <i className="NavbarIcon__search fa-sharp fa-solid fa-magnifying-glass" />
      </div>
    </div>
  );
}
