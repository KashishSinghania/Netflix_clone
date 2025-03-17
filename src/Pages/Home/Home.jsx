import List from "../../Components/List/List";
import Navbar from "../../Components/Navbar/Navbar";
import Featured from "../../Featured/Featured";
import "./home.scss";
const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Featured />
      <List title="Movies" />
      <List title="Series" />
      <List title="Anime" />
      <List title="Documentary" />
    </div>
  );
};

export default Home;
