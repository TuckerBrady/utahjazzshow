import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import { images } from "../../constants";
import "./Sidebar.scss";

export default function Sidebar() {
  const [categories, setCategories] = useState([]);

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
        <span className="sidebar__Title">FEATURED POST</span>
        <img className="sidebar__Image" src={images.blogImage1} alt="profile" />
        <p className="sidebar__Text">
          This is the first sentence of the post: '7 Tips on HOw to Make a Good
          Infographic'.
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
