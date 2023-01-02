import React from "./Sidebar.scss";
import { images } from "../constants";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__Item">
        <span className="sidebar__Title">ABOUT ME</span>
        <img
          className="sidebar__Image"
          src={images.profile}
          alt="profile image"
        />
        <p className="sidebar__Text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam
          nesciunt hic culpa ratione, perspiciatis.
        </p>
      </div>
      <div className="sidebar__Item">
        <span className="sidebar__Title">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarList__Item">Adventure</li>
          <li className="sidebarList__Item">Fishing</li>
          <li className="sidebarList__Item">Hinting</li>
          <li className="sidebarList__Item">Family</li>
          <li className="sidebarList__Item">Gear Review</li>
        </ul>
      </div>
      <div className="sidebar__Item">
        <span className="sidebar__Title">FOLLOW US</span>
        <div className="sidebar__Social">
          <i class="sidebarIcon__logo fa-brands fa-square-facebook" />
          <i class="sidebarIcon__logo fa-brands fa-square-instagram" />
          <i class="sidebarIcon__logo fa-brands fa-square-twitter" />
        </div>
      </div>
    </div>
  );
}
