import "./Alert.css";
import FmdBadIcon from "@mui/icons-material/FmdBad";

function Alert(props) {
  const onClick = () => {
    props.trigger(false);
  };

  return (
    <div className="alert">
      <div className="alert_header">
        <button onClick={onClick} className="alert_header_close">
          X
        </button>
      </div>
      <h1 className="terms">Attention</h1>
      <FmdBadIcon
        sx={{
          width: "25%",
          height: "25%",
          marginLeft: "35%",
        }}
      />
      <p className="desc_terms">
        Leaving activity after confirming participationmarks the user with a
        strike.
      </p>
      <p className="desc_terms a">
        After receiving 3 strikes the user will be permited from using the
        application.
      </p>
    </div>
  );
}

export default Alert;
