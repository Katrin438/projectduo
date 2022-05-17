import { useState } from "react";
import "./login.css";
import LoginComponent from "../components/LoginComponent";
import logoedno from "../images/logoedno.png";
import back from "../images/back.png";
import { borderRadius } from "@mui/system";
function LoginPage(props) {
  const [enteredusername, setUsername] = useState("");
  const [enteredPassword, setPassword] = useState("");

  const usernameChangeHandler = (event) => {
    setUsername(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const userData = {
      username: enteredPassword,
      password: enteredPassword,
    };

    props.onCheckUser(enteredusername, enteredPassword);
  };

  return (
    <div style={{ backgroundImage: `url(${back})` }}>
      <img className='logoedno' src={logoedno} loading="lazy" />
      <form style={{
        display: "grid",
        padding: "15%"
      }}
        onSubmit={submitHandler}>
        <p style={{
          fontSize: "180%",
          fontWeight: "500"
        }}>Username</p>
        <input style={{
          padding: "7px",
          fontSize: "120%",
          marginTop: "5%",
          marginTop: "8%"
        }}
          type="text"
          name="username"
          onChange={usernameChangeHandler}
        ></input>
        <p style={{
          fontSize: "180%",
          marginTop: "5%",
          fontWeight: "500"
        }}>Password</p>
        <input style={{
          padding: "7px",
          fontSize: "120%",
          marginTop: "8%",
          borderColor: "none",
          borderWidth: "none",
        }}
          type="text"
          name="password"
          onChange={passwordChangeHandler}
        ></input>
        <button style={{
          padding: "10px",
          color: "white",
          marginTop: "22%",
          backgroundColor: "#FEA733",
          borderRadius: "30px",
          borderColor: "none",
          borderWidth: "none",
          fontSize: "140%",
          fontWeight: "500"
        }}>Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
