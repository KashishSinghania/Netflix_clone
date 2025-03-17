import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import "./Featured.scss";
import { Link } from "react-router-dom";

export default function Featured(prop) {
  return (
    <div className="featured">
      {prop.types && (
        <div className="category">
          <span>{prop.types === "movie" ? "Movies" : "TVseries"}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horro">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-Fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      <img
        src="https://s01.sgp1.digitaloceanspaces.com/large/882579-ubatpqeobt-1528947985.jpg"
        alt=""
      />
      <div className="info">
        <img
          src="https://occ-0-2567-778.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABYgfoHDq4k_62QfysrYEUw0BCdYa4gJdjPWxCb5knP3yYwfMeVs1Prd-0PYc9Xb03RXx0Qetbeb-uijUI-TpDZC08WH-ouyXP2uuLNlt6D8h.png?r=1a3"
          alt=""
        />
        <span className="desc">
          The film follows the Warrens as they travel to England to assist the
          Hodgson family, who are experiencing poltergeist activity at their
          Enfield council house in 1977 which later became referred to as the
          Enfield poltergeist.
        </span>
        <div className="buttons">
          <button className="Play">
            <Link
              to="/watch"
              style={{
                display: "flex",
                alignItems: "center",
                justifyItems: "center",
              }}
            >
              <PlayArrow />
              <span>Play</span>
            </Link>
          </button>
          <button className="More">
            <InfoOutlined />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
}
//need to work on prop functionality and how to call it.