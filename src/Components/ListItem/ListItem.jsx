import {
  Add,
  PlayArrow,
  ThumbDownOutlined,
  ThumbUpAltOutlined,
} from "@material-ui/icons";
import "./ListItem.scss";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function ListItem(prop) {
  const [isHovered, setIsHovered] = useState(false);
  const trailer =
    "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";
  return (
    <div
      className="ListItem"
      style={{ left: isHovered && prop.index * 225 - 50 + prop.index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={prop.movie.cover} alt="" />
      {isHovered && (
        <>
          <Link to="/watch">
            <video src={trailer} autoPlay={true} loop></video>

            <div className="itemInfo">
              <div className="icons">
                <PlayArrow className="icon" />
                <Add className="icon" />
                <ThumbUpAltOutlined className="icon" />
                <ThumbDownOutlined className="icon" />
              </div>
              <div className="itemInfoTop">
                <span>54 min</span>
                <span className="limit">18</span>
                <span>2016</span>
              </div>
              <div className="descrip">{prop.movie.desc}</div>
              <div className="genre">{prop.movie.genre}</div>
            </div>
          </Link>
        </>
      )}
    </div>
  );
}
