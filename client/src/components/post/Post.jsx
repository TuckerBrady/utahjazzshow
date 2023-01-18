import { Link } from "react-router-dom";

import "./Post.scss";

export default function Post({ post }) {
  return (
    <div className="post">
      <Link to={`/post/${post._id}`} className="reactRouter__Link">
        <span className="post__Title">{post.title}</span>
      </Link>
      <span className="post__Date">
        {new Date(post.createdAt).toDateString()}
      </span>
      {post.photo && (
        <img src={post.photo} alt="blog 1" className="post__Image" />
      )}
      <div className="post__Info">
        <div className="info__Categories">
          {post.categories.map((c) => (
            <span className="category">{c.name}</span>
          ))}
        </div>
        <p className="post__Preview">{post.description}</p>
        <hr />
      </div>
    </div>
  );
}
