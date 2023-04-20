import { useContext, useState } from "react";
import axios from "axios";

import "./Write.scss";
import { Context } from "../../context/Context";

export default function Write() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      description,
    };
    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append("name", fileName);
      data.append("file", file);
      newPost.photo = fileName;
      try {
        await axios.post("/upload", data);
      } catch (err) {}
    }
    try {
      const res = await axios.post("/posts", newPost);
      window.location.replace("/post/" + res.data._id);
    } catch (err) {}
  };

  return (
    <div className="write">
      {file && (
        <img
          src={URL.createObjectURL(file)}
          alt="cover"
          className="write__Image"
        />
      )}
      <form className="write__Form" onSubmit={handleSubmit}>
        <div className="form__Group">
          <label htmlFor="fileInput">
            <i className="write__Icon fa-regular fa-plus"></i>
          </label>
          <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            onChange={(e) => setFile(e.target.files[0])}
          />
          <input
            type="text"
            placeholder="Title"
            className="write__Input"
            autoFocus={true}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form__Group">
          <textarea
            placeholder="Go on and tell em..."
            type="text"
            className="write__Input write__Text"
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <button className="write__Submit" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
}
