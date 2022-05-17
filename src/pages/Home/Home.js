import { Hd } from "@mui/icons-material";
import React from "react";
import { NavLink } from "react-router-dom";
import { Chip } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { Icon } from "@mui/material";
import logo from "../../images/logo.svg";
import amsterdam from "../../images/amsterdam.png";
import rotterdam from "../../images/rotterdam.png";
import haga from "../../images/haga.png";
import HomeIcon from "@mui/icons-material/Home";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Photo from "../../images/Photo.png";
import { Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import "./Home.css";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <div className="firstPart">
        <Chip
          className="s"
          icon={
            <LocationOnIcon
              sx={{
                fontSize: "2.2rem",
                color: "#5893D8 !important",
              }}
            />
          }
          label="Eindhoven,Netherlands"
          variant="outlined"
        />
        {/*<img src={logo} loading="lazy" />*/}
        <div className="avatar">
          <Avatar
            alt="Martin Ivanov"
            src={Photo}
            sx={{ width: 80, height: 80 }}
          />
        </div>
      </div>
      <h1 className="title">Where do</h1>
      <h1 className="title">you want to go?</h1>
      <div className="bod">
        <Button className="search" variant="contained">
          Search your destination
          {
            <SearchIcon
              sx={{
                fontSize: "2.2rem",
                color: "#5893D8 !important",
                marginLeft: "25%!important",
              }}
            />
          }
        </Button>
      </div>
      <h1 className="title second">Popular</h1>
      <div className="wholeContent">
        <Link to="/amsterdam">
          <img className="amsterdam" src={amsterdam} loading="lazy" />
        </Link>
        <img className="amsterdam" src={rotterdam} loading="lazy" />
        <img className="amsterdam" src={haga} loading="lazy" />
      </div>
    </>
  );
};

export default Home;
