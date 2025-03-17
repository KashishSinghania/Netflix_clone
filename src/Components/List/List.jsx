import { movies } from "../../Utils/movies";
import { series } from "../../Utils/series";
import { anime } from "../../Utils/anime";
import { documentary } from "../../Utils/documentry";
import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@material-ui/icons";
import "./List.scss";
import ListItem from "../ListItem/ListItem";
import { useRef, useState } from "react";

export default function List(prop) {
  const [isMoved, setIsMoved] = useState(false);
  const [slideNumber, setSlideNumber] = useState(0);
  const listRef = useRef();

  const handleClick = (direction) => {
    setIsMoved(() => true);
    let distance = listRef.current.getBoundingClientRect().x - 50;

    if (direction === "left" && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
    }
    if (direction === "right" && slideNumber < 5) {
      setSlideNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
    }
    //console.log(distance);
  };
  return (
    <div className="list">
      <span className="ListTitle">Continue to {`${prop.title}`}</span>
      <div className="wrapper">
        <ArrowBackIosOutlined
          className="sliderArrow left"
          onClick={() => handleClick("left")}
          style={{ display: !isMoved && "none" }}
        />
        {prop.title === "Movies" && (
          <div className="Ccontainer" ref={listRef}>
            {movies.map((movie, index) => {
              return <ListItem key={index} index={index} movie={movie} />;
            })}
          </div>
        )}
        {prop.title === "Series" && (
          <div className="Ccontainer" ref={listRef}>
            {series.map((movie, index) => {
              return <ListItem key={index} index={index} movie={movie} />;
            })}
          </div>
        )}
        {prop.title === "Anime" && (
          <div className="Ccontainer" ref={listRef}>
            {anime.map((movie, index) => {
              return <ListItem key={index} index={index} movie={movie} />;
            })}
          </div>
        )}
        {prop.title === "Documentary" && (
          <div className="Ccontainer" ref={listRef}>
            {documentary.map((movie, index) => {
              return <ListItem key={index} index={index} movie={movie} />;
            })}
          </div>
        )}

        <ArrowForwardIosOutlined
          className="sliderArrow right"
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  );
}
