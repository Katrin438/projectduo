import ProfilePage from "./pages/Profile/ProfilePage";
import LoginPage from "./pages/LoginPage";
import Amsterdam from "./pages/Amsterdam/Amsterdam";
import Lobby from "./pages/Lobby/Lobby";
import { Routes, Route, Link } from "react-router-dom";
import { Button } from "@mui/material";
import Home from "./pages/Home/Home";
import MenuComponent from "./components/Menu/MenuComponent";
import { userData } from "./components/UserDataComponent";
import React, { useState, useContext,useEffect } from "react";
import OneSignal from 'react-onesignal';
export const MyContext = React.createContext();

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState({});

  useEffect(() => {
    OneSignal.init({
      appId: "a021694b-b9ca-44c5-a802-a8f8f0767042",
    });
  }, []);

  const checkUser = (username, password) => {
    const users = [...userData.users];
    users.forEach((appUser) => {
      if (appUser.username == username && appUser.password == password) {
        setIsLoggedIn((curentLoggedIn) => (curentLoggedIn = true));
        setLoggedInUser(appUser);
        console.log(isLoggedIn);
        console.log(loggedInUser);
      }
    });
  };

  if (isLoggedIn) {
    return (
      <div>
        {console.log(loggedInUser)}
        <MyContext.Provider value={loggedInUser}>
          <Routes>
            <Route
              path="/login"
              element={<LoginPage onCheckUser={checkUser} />}
            />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/home" element={<Home />} />
            <Route path="/amsterdam" element={<Amsterdam />} />
            <Route path="/lobby" element={<Lobby />} />
          </Routes>
        </MyContext.Provider>
        <MenuComponent />
      </div>
    );
  } else {
    return (
      <div>
        <LoginPage onCheckUser={checkUser}></LoginPage>
      </div>
    );
  }
}

export default App;
