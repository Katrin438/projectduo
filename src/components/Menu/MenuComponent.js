import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AddBoxIcon from "@mui/icons-material/AddBox";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonIcon from "@mui/icons-material/Person";
import useStyle from "./style";
import { Link } from "react-router-dom";

const MenuComponent = () => {
  const classes = useStyle();
  return (
    <Paper component="nav" className={classes.paper}>
      <BottomNavigation className={classes.squareNav}>
        <BottomNavigationAction
          component={Link}
          to="/home"
          icon={
            <HomeIcon
              sx={{
                fontSize: "2.2rem",
                color: "#fff",
              }}
            />
          }
        />
        <BottomNavigationAction
          component={Link}
          to="/lobby"
          icon={
            <NotificationsIcon
              sx={{
                fontSize: "2.2rem",
                color: "#fff",
              }}
            />
          }
        />
        <BottomNavigationAction
          icon={
            <AddBoxIcon
              sx={{
                fontSize: "3.2rem",
                color: "#fff",
              }}
            />
          }
        />
        <BottomNavigationAction
          icon={
            <FavoriteIcon
              sx={{
                fontSize: "2.2rem",
                color: "#fff",
              }}
            />
          }
        />
        <BottomNavigationAction
          component={Link}
          to="/profile"
          icon={
            <PersonIcon
              sx={{
                fontSize: "2.2rem",
                color: "#fff",
              }}
            />
          }
        />
      </BottomNavigation>
    </Paper>
  );
};

export default MenuComponent;
