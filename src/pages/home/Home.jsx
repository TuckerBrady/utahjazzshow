import Header from "../../header/Header";
import Posts from "../../posts/Posts";
import Sidebar from "../../sidebar/Sidebar";
import "./Home.scss";

export default function home() {
  return (
    <>
      <Header />
      <div className="home">
        <Posts />
        <Sidebar />
      </div>
    </>
  );
}
