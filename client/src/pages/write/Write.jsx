import "./Write.scss";
import { images } from "../../constants";

export default function Write() {
  return (
    <div className="write">
      <img src={images.blogImage2} alt="cover photo" className="write__Image" />
      <form className="write__Form">
        <div className="form__Group">
          <label htmlFor="fileInput">
            <i class="write__Icon fa-regular fa-plus"></i>
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} />
          <input
            type="text"
            placeholder="Title"
            className="write__Input"
            autoFocus={true}
          />
        </div>
        <div className="form__Group">
          <textarea
            placeholder="Tell your story..."
            type="text"
            className="write__Input write__Text"
          ></textarea>
        </div>
        <button className="write__Submit">Publish</button>
      </form>
    </div>
  );
}
