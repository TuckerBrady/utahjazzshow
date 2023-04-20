import { useContext, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import "./Settings.scss";
import { Context } from "../../context/Context";

import Sidebar from "../../components/sidebar/Sidebar";

export default function Settings() {
  const [file, setFile] = useState(null);
  const [success, setSuccess] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/";

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "UPDATE_START" });
    const updatedUser = {
      userId: user._id,
      username,
      email,
      password,
    };
    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append("name", fileName);
      data.append("file", file);
      updatedUser.profilePicture = fileName;
      try {
        await axios.post("/upload", data);
      } catch (err) {}
    }
    try {
      const res = await axios.put("/users/" + user._id, updatedUser);
      setSuccess(true);
      dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "UPDATE_FAILURE" });
    }
  };

  return (
    <div className="settings">
      <div className="settings__Wrapper">
        <div className="settings__Title">
          <span className="settings__UpdateTitle">Update Your Account</span>
          <span className="settings__DeleteTitle">Delete Your Account</span>
        </div>
        <form className="settings__Form" onSubmit={handleSubmit}>
          <label>Profile Picture</label>
          <div className="settings_ProfilePicture">
            <img
              src={file ? URL.createObjectURL(file) : PF + user.profilePicture}
              alt="Profile"
            />
            <label htmlFor="fileInput">
              <i className="settings__ProfilePictureIcon fa-regular fa-user"></i>
            </label>
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
          <label>Username</label>
          <input
            type="text"
            placeholder={user.username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>Email</label>
          <input
            type="email"
            placeholder={user.email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="settings__BottomButtons">
            <button className="settings__Submit" type="submit">
              Update Profile
            </button>
            {user.isAdmin && (
              <button className="settings__Submit">
                <Link to="/write" className="reactRouter__Link">
                  Write Post
                </Link>
              </button>
            )}
          </div>

          {success && (
            <span style={{ color: "green" }}>
              Profile has been successfully updated
            </span>
          )}
        </form>
      </div>
      <Sidebar />
    </div>
  );
}
