import { ArrowDropDown, Notifications, Search } from "@material-ui/icons";
import "./Navbar.scss";
import Logo from "../../assets/netflix-logo-png-2562.png";
import Pic from "../../assets/Logo new.png";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.scrollY === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  //console.log(isScrolled);

  return (
    <div className={isScrolled ? "Navbar scrolled" : "Navbar"}>
      <div className="container">
        <div className="left">
          <img src={Logo} alt="" />
          <span>Homepage</span>
          <span>Series</span>
          <span>Movies</span>
          <span>New and Popular</span>
          <span>My List</span>
        </div>
        <div className="right">
          <Search className="icon" />
          <span>KID</span>
          <Notifications className="icon" />
          <img src={Pic} alt="" />
          <div className="profile">
            <ArrowDropDown className="icon" />
            <div className="options">
              <span>Settings</span>
              <Link to="/login">
                <span>Logout</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
//modifications req in onscroll =null . logic not entirely correct
//scss for top and also make it links.