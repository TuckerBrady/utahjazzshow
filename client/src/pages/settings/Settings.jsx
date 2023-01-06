import "./Settings.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import { images } from "../../constants";

export default function Settings() {
  return (
    <div className="settings">
      <div className="settings__Wrapper">
        <div className="settings__Title">
          <span className="settings__UpdateTitle">Update Your Account</span>
          <span className="settings__DeleteTitle">Delete Your Account</span>
        </div>
        <form className="settings__Form">
          <label>Profile Picture</label>
          <div className="settings_ProfilePicture">
            <img src={images.profile} alt="Profile" />
            <label htmlFor="fileInput">
              <i class="settings__ProfilePictureIcon fa-regular fa-user"></i>
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} />
          </div>
          <label>Username</label>
          <input type="text" placeholder="Tucker" />
          <label>Email</label>
          <input type="email" placeholder="tucker@example.com" />
          <label>Password</label>
          <input type="password" />
          <button className="settings__Submit">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}
