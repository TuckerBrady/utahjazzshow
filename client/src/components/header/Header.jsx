import "./Header.scss";
import { images } from "../../constants";

export default function header() {
  return (
    <div className="header">
      <img className="headerTitle__Image" src={images.homebanner} alt="blog" />
    </div>
  );
}
