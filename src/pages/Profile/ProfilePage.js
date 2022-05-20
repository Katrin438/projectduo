import ProfileData from "../../components/ProfileData";
import Avatar from "@mui/material/Avatar";
import "./Profile.css";
import { Switch } from "@mui/material";
import Button from "@mui/material/Button";
import Photo from "../../images/Photo.png";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { flexbox } from "@mui/system";
import React, { useContext, useState } from "react";
import { FormatAlignJustify } from "@mui/icons-material";
import { MyContext } from "../../App";

function ProfilePage() {
  const [checked, setChecked] = React.useState(true);
  const loggedInUser = useContext(MyContext);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const [checked2, setChecked2] = React.useState(true);

  const handleChange2 = (event) => {
    setChecked2(event.target.checked);
  };

  return (
    <div>
      <ProfileData></ProfileData>
      <div>
        <Avatar
          alt="Martin Ivanov"
          src={Photo}
          sx={{
            width: 170,
            height: 170,
            marginLeft: "28%",
            marginTop: "5%",
            display: "flex",
          }}
        />
        {/* <p className="name">Martin Ivanov</p> */}
        <p className="name">{loggedInUser.firstName} {loggedInUser.lastName}</p>
        <p className="location">
          <LocationOnIcon />
          Eindhoven
        </p>
        <Button
          sx={{
            backgroundColor: "#FE7137",
            borderRadius: "21px!important",
            width: "40%",
            display: "flex",
            marginTop: "5%",
            marginLeft: "30%",
          }}
          variant="contained"
        >
          Log out
        </Button>
        <p className="settings">Settings</p>
        <div className="together">
          <div>
            <p className="desc">
              Receive notification when 5/7 poeple have joined
            </p>
            <Switch
              checked={checked}
              onChange={handleChange}
              inputProps={{ "aria-label": "controlled" }}
            />
          </div>
          <div>
            <p className="desc">
              Receive notification when everyone have confirmed the payment{" "}
            </p>
            <Switch
              checked={checked2}
              onChange={handleChange2}
              inputProps={{ "aria-label": "controlled" }}
            />
          </div>
        </div>
        <p className="strikes">1/3 strikes</p>
      </div>
    </div>
  );
}

export default ProfilePage;
