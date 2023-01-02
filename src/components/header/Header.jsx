import "./Header.scss";
import { images } from "../../constants";

export default function header() {
  return (
    <div className="header">
      <div className="headerTitle">
        <span className="headerTitle__Small">React & Node</span>
        <span className="headerTitle__Large">Blog</span>
      </div>
      <img className="headerTitle__Image" src={images.blogImage2} alt="blog" />
    </div>
  );
}
