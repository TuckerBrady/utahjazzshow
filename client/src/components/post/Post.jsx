import "./Post.scss";
import { images } from "../../constants";

export default function Post() {
  return (
    <div className="post">
      <span className="post__Title">Default Post Title</span>
      <span className="post__Date">1 hour ago</span>
      <img src={images.blogImage2} alt="blog 1" className="post__Image" />
      <div className="post__Info">
        <div className="info__Categories">
          <span className="category">Hunting</span>
          <span className="category">Outdoors</span>
        </div>
        <p className="post__Preview">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
          minus esse numquam dolores soluta beatae laudantium. Iste quasi
          repellat consequuntur aspernatur, at adipisci tempora eligendi
          consequatur minima, voluptatem cum autem. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Nostrum, minus esse numquam dolores
          soluta beatae laudantium. Iste quasi repellat consequuntur aspernatur,
          at adipisci tempora eligendi consequatur minima, voluptatem cum autem.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
          minus esse numquam dolores soluta beatae laudantium. Iste quasi
          repellat consequuntur aspernatur, at adipisci tempora eligendi
          consequatur minima, voluptatem cum autem.
        </p>
        <hr />
      </div>
    </div>
  );
}
