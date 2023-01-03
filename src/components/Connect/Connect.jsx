import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaSpotify, FaApple, FaYoutube } from "react-icons/fa";
import "./Connect.scss";

const Connect = ({closed,setClosed}) => {
  const [spotifyConnected, setSpotifyConnected] = useState(false);
  const [youtubeConnected, setYoutubeConnected] = useState(false);
  const [appleConnected, setAppleConnected] = useState(false);
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || {}
  );
  let windowOpen;
  function onClickSpotify() {
    // setClosed(false)
    windowOpen = window.open(
      "http://localhost:8000/auth/spotify",
      "_blank",
      "widht=500, height=500"
    );
     
  }

  function onClickYoutube() {
    setYoutubeConnected(true);
  }
  function onClickApple() {
    setAppleConnected(true);
  }
  async function fetchUser() {
    console.log("clicked");
    await axios
      .get("http://localhost:8000/user", { withCredentials: true })
      .then((res) => {
        if (res.data.userId) {
          setSpotifyConnected(true);
          localStorage.setItem("user", JSON.stringify(res.data));
        }
      });
  }
  useEffect(() => {
    // const int = setInterval(() => {
    //   console.log("hi");
    //   if (!user.userId) {
    //     fetchUser();
    //   }
    // }, 500);
    // if (user.userId) {
    //   return clearInterval(int);
    // }
  }, [closed]);
  console.log(closed)

  return (
    <div className="connect">
      <div className="connect__wrapper">
        <button className="connect__wrapper--spotify" onClick={onClickSpotify}>
          <FaSpotify /> Spotify {spotifyConnected && "- Connected"}
        </button>
        <button className="connect__wrapper--youtube" onClick={onClickYoutube}>
          <FaYoutube /> Youtube Music {youtubeConnected && "- Connected"}
        </button>
        <button className="connect__wrapper--apple" onClick={onClickApple}>
          <FaApple /> Apple Music {appleConnected && "- Connected"}
        </button>
        <button style={{ cursor: "pointer" }} onClick={fetchUser}>
          Fetch User
        </button>
      </div>
    </div>
  );
};

export default Connect;
