import { ArrowBackOutlined } from "@material-ui/icons";
import "./Watch.scss";
import Vid from "../../assets/Marvel.mp4";
import { Link } from "react-router-dom";

export default function Watch() {
  return (
    <div className="watch">
      <div className="back">
        <Link
          to="/home"
          style={{
            display: "flex",
            alignItems: "center",
            justifyItems: "center",
          }}
        >
          <ArrowBackOutlined />
          Home
        </Link>
      </div>
      <video
        className="video"
        autoPlay
        // progress
        controls
        src={Vid}
      />
    </div>
  );
}
