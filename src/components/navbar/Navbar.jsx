import React from "./Navbar.scss";

import { images } from "../constants";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbarLeft">
        <i class="navbarIcon__logo fa-brands fa-square-facebook" />
        <i class="navbarIcon__logo fa-brands fa-square-instagram" />
        <i class="navbarIcon__logo fa-brands fa-square-twitter" />
      </div>
      <div className="navbarCenter">
        <ul className="navbarList">
          <li className="navbarList__item">Home</li>
          <li className="navbarList__item">About</li>
          <li className="navbarList__item">Contact</li>
          <li className="navbarList__item">Write</li>
          <li className="navbarList__item">Logout</li>
        </ul>
      </div>
      <div className="navbarRight">
        <img className="navbarImage" src={images.profile} alt="profile" />
        <i class="NavbarIcon__search fa-sharp fa-solid fa-magnifying-glass" />
      </div>
    </div>
  );
}
