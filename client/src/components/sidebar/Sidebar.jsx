import React from "./Sidebar.scss";
import { images } from "../../constants";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";

export default function Sidebar() {
  const [categories, setCategories] = useState([]);
  const { user } = useContext(Context);
  const PF = "http://localhost:5000/images/";

  useEffect(() => {
    const getCategories = async () => {
      const res = await axios.get("/categories");
      setCategories(res.data);
    };
    getCategories();
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebar__Item">
        <span className="sidebar__Title">ABOUT {user.username}</span>
        <img
          className="sidebar__Image"
          src={PF + user.profilePicture}
          alt="profile"
        />
        <p className="sidebar__Text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam
          nesciunt hic culpa ratione, perspiciatis.
        </p>
      </div>
      <div className="sidebar__Item">
        <span className="sidebar__Title">CATEGORIES</span>
        <ul className="sidebarList">
          {categories.map((c) => (
            <Link to={`/?category=${c.name}`} className="reactRouter__Link">
              <li className="sidebarList__Item">{c.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebar__Item">
        <span className="sidebar__Title">FOLLOW US</span>
        <div className="sidebar__Social">
          <i className="sidebarIcon__logo fa-brands fa-square-facebook" />
          <i className="sidebarIcon__logo fa-brands fa-square-instagram" />
          <i className="sidebarIcon__logo fa-brands fa-square-twitter" />
        </div>
      </div>
    </div>
  );
}
