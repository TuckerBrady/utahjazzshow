import Header from "../../components/header/Header";
import Posts from "../../components/post/Post";
import Sidebar from "../../components/sidebar/Sidebar";
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
