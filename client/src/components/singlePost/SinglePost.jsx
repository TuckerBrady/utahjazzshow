import "./SinglePost.scss";
import { images } from "../../constants";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePost__Wrapper">
        <img src={images.blogImage2} alt="" className="singlePost__Image" />
        <h1 className="singlepost__Title">
          Single Post Title
          <div className="singlepost__Edit">
            <i class="singlePost__Icon fa-regular fa-pen-to-square"></i>
            <i class="singlePost__Icon fa-solid fa-trash"></i>
          </div>
        </h1>
        <div className="singlePost__Info">
          <span className="singlePost__Author">
            Author: <b>Tucker</b>
          </span>
          <span className="singlePost__Date">1 hour ago</span>
        </div>
        <p className="singlePost__Text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quae
          vel sed voluptatem quaerat ea, rerum laboriosam accusantium ipsum illo
          impedit assumenda excepturi repudiandae officiis aspernatur tempore
          neque obcaecati sapiente! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Possimus quae vel sed voluptatem quaerat ea, rerum
          laboriosam accusantium ipsum illo impedit assumenda excepturi
          repudiandae officiis aspernatur tempore neque obcaecati sapiente!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quae
          vel sed voluptatem quaerat ea, rerum laboriosam accusantium ipsum illo
          impedit assumenda excepturi repudiandae officiis aspernatur tempore
          neque obcaecati sapiente! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Possimus quae vel sed voluptatem quaerat ea, rerum
          laboriosam accusantium ipsum illo impedit assumenda excepturi
          repudiandae officiis aspernatur tempore neque obcaecati sapiente!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quae
          vel sed voluptatem quaerat ea, rerum laboriosam accusantium ipsum illo
          impedit assumenda excepturi repudiandae officiis aspernatur tempore
          neque obcaecati sapiente! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Possimus quae vel sed voluptatem quaerat ea, rerum
          laboriosam accusantium ipsum illo impedit assumenda excepturi
          repudiandae officiis aspernatur tempore neque obcaecati sapiente!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quae
          vel sed voluptatem quaerat ea, rerum laboriosam accusantium ipsum illo
          impedit assumenda excepturi repudiandae officiis aspernatur tempore
          neque obcaecati sapiente! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Possimus quae vel sed voluptatem quaerat ea, rerum
          laboriosam accusantium ipsum illo impedit assumenda excepturi
          repudiandae officiis aspernatur tempore neque obcaecati sapiente!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quae
          vel sed voluptatem quaerat ea, rerum laboriosam accusantium ipsum illo
          impedit assumenda excepturi repudiandae officiis aspernatur tempore
          neque obcaecati sapiente! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Possimus quae vel sed voluptatem quaerat ea, rerum
          laboriosam accusantium ipsum illo impedit assumenda excepturi
          repudiandae officiis aspernatur tempore neque obcaecati sapiente!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quae
          vel sed voluptatem quaerat ea, rerum laboriosam accusantium ipsum illo
          impedit assumenda excepturi repudiandae officiis aspernatur tempore
          neque obcaecati sapiente! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Possimus quae vel sed voluptatem quaerat ea, rerum
          laboriosam accusantium ipsum illo impedit assumenda excepturi
          repudiandae officiis aspernatur tempore neque obcaecati sapiente!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quae
          vel sed voluptatem quaerat ea, rerum laboriosam accusantium ipsum illo
          impedit assumenda excepturi repudiandae officiis aspernatur tempore
          neque obcaecati sapiente! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Possimus quae vel sed voluptatem quaerat ea, rerum
          laboriosam accusantium ipsum illo impedit assumenda excepturi
          repudiandae officiis aspernatur tempore neque obcaecati sapiente!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quae
          vel sed voluptatem quaerat ea, rerum laboriosam accusantium ipsum illo
          impedit assumenda excepturi repudiandae officiis aspernatur tempore
          neque obcaecati sapiente! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Possimus quae vel sed voluptatem quaerat ea, rerum
          laboriosam accusantium ipsum illo impedit assumenda excepturi
          repudiandae officiis aspernatur tempore neque obcaecati sapiente!
        </p>
      </div>
    </div>
  );
}