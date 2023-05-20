import axios from "axios";
import { useContext } from "react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import parse from "html-react-parser";

import "./SinglePost.scss";

export default function SinglePost() {
  const PF = "http://localhost:5000/images/";
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  const { user } = useContext(Context);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [updateMode, setUpdateMode] = useState(false);
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

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/posts/" + path);
      setPost(res.data);
      setTitle(res.data.title);
      setDescription(res.data.description);
    };
    getPost();
  }, [path]);

  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${post._id}`, {
        data: { username: user.username },
      });
      window.location.replace("/");
    } catch (err) {}
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`/posts/${post._id}`, {
        username: user.username,
        title,
        description,
      });
      setUpdateMode(false);
    } catch (err) {}
  };

  return (
    <div className="singlePost">
      <div className="singlePost__Wrapper">
        {post.photo && (
          <img src={PF + post.photo} alt="" className="singlePost__Image" />
        )}
        {updateMode ? (
          <input
            type="text"
            value={title}
            className="singlepost__TitleInput"
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
          <h1 className="singlepost__Title">
            {title}
            {post.username === user?.username && (
              <div className="singlepost__Edit">
                <i
                  className="singlePost__Icon fa-regular fa-pen-to-square"
                  onClick={() => setUpdateMode(true)}
                ></i>
                <i
                  className="singlePost__Icon fa-solid fa-trash"
                  onClick={handleDelete}
                ></i>
              </div>
            )}
          </h1>
        )}
        <div className="singlePost__Info">
          <span className="singlePost__Author">
            Author: {}
            <Link to={`/?user=${post.username}`} className="reactRouter__Link">
              <b>{post.username}</b>
            </Link>
          </span>
          <span className="singlePost__Date">
            {new Date(post.createdAt).toDateString}
          </span>
        </div>
        {updateMode ? (
          <ReactQuill
            theme="snow"
            className="singlePost__TextInput"
            modules={modules}
            formats={formats}
            value={description}
            onChange={setDescription}
          />
        ) : (
          <p className="singlePost__Text">{parse(description)}</p>
        )}
        {updateMode && (
          <button className="singlePost__Button" onClick={handleUpdate}>
            Update
          </button>
        )}
      </div>
    </div>
  );
}
