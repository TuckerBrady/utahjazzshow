import { Link } from "react-router-dom";
import parse from "html-react-parser";

import "./Post.scss";

export default function Post({ post }) {
  const PF = "http://localhost:5000/images/";

  return (
    <Link to={`/post/${post._id}`} className="reactRouter__Link">
      <div className="post">
        <span className="post__Title">{post.title}</span>
        <span className="post__Date">
          {new Date(post.createdAt).toDateString()}
        </span>
        {post.photo && (
          <img src={PF + post.photo} alt="blog 1" className="post__Image" />
        )}
        <div className="post__Info">
          <div className="info__Categories">
            {post.categories.map((c) => (
              <span className="category">{c.name}</span>
            ))}
          </div>
          <p className="post__Preview">{parse(post.description)}</p>
          <hr />
        </div>
      </div>
    </Link>
  );
}
