import { useContext, useState } from "react";
import axios from "axios";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import "./Write.scss";
import { Context } from "../../context/Context";

export default function Write(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ size: [] }],
      [{ font: [] }],
      [{ align: ["right", "center", "justify"] }],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      [{ color: ["red", "#785412"] }],
      [{ background: ["red", "#785412"] }],
    ],
  };
  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "link",
    "color",
    "image",
    "background",
    "align",
    "size",
    "font",
  ];

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
          <ReactQuill
            theme="snow"
            placeholder="Go on and tell em..."
            modules={modules}
            formats={formats}
            type="text"
            className="write__Input write__Text"
            onChange={setDescription}
          />
        </div>
        <button className="write__Submit" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
}
