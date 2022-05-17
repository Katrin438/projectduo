import "./Lobby.css";
import { Button } from "@mui/material";
import HourglassBottomIcon from "@mui/icons-material/HourglassBottom";
import { useState } from "react";
import Ticket from "../../components/Ticket/Ticket";

const Lobby = () => {
  //counter for when the button is pressed the peopple who have confirmed the payment will become 7/7
  //and ticket will appear  on the screen
  const [trigger, setTrigger] = useState(false);
  const [count, setCount] = useState(6);
  const onClick = () => {
    if (count < 7) {
      setCount(count + 1);
      setTrigger(true);
    }
  };
  return (
    <div className="whole">
      <div className="orange-square">
        <p className="titleOfLobby">Amsterdam</p>
      </div>
      <p className="numberOfPeopleJoined">{count}/7 people have confirmed</p>
      <div
        className="content_that_we_hide"
        style={{
          display: trigger ? "none" : "block",
        }}
      >
        <HourglassBottomIcon
          sx={{
            width: "80%",
            height: "auto",
            marginLeft: "10%",
            marginTop: "5%",
          }}
        />
        <p></p>
        <Button
          sx={{
            backgroundColor: "#5893D8",
            marginTop: "20%",
            marginLeft: "20%",
            fontSize: "120%!important",
            padding: "13px 18px",
          }}
          onClick={onClick}
          variant="contained"
        >
          Confirm payment
        </Button>
        <p className="twodays">2 days left</p>
      </div>

      {trigger ? <Ticket /> : <></>}
      <div style={{
        paddingTop:"50%"
      }}></div>
    </div>
  );
};

export default Lobby;
