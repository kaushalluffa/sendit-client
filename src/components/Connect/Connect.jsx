import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaSpotify, FaApple, FaYoutube } from "react-icons/fa";
import "./Connect.scss";

const Connect = ({ closed, setClosed }) => {
  const [spotifyConnected, setSpotifyConnected] = useState(
    JSON.parse(localStorage.getItem("spotifyUser"))?.userId ? true : false
  );
  const [youtubeConnected, setYoutubeConnected] = useState(
    JSON.parse(localStorage.getItem("googleUser"))?.userId ? true : false
  );
  const [appleConnected, setAppleConnected] = useState(false);
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || {}
  );
  const [disableBtn, setDisableBtn] = useState(false);
  function onClickSpotify() {
    let windowOpen;
    let timer = null;
    windowOpen = window.open(
      "http://localhost:8000/auth/spotify",
      "_blank",
      "widht=500, height=500"
    );
    if (windowOpen) {
      timer = setInterval(() => {
        if (windowOpen.closed) {
          fetchUser();

          if (timer) clearInterval(timer);
        }
      }, 500);
    }
  }

  function onClickYoutube() {
    let windowOpen;
    let timer = null;
    windowOpen = window.open(
      "http://localhost:8000/auth/google",
      "_blank",
      "widht=500, height=500"
    );
    if (windowOpen) {
      timer = setInterval(() => {
        if (windowOpen.closed) {
          fetchUser();

          if (timer) clearInterval(timer);
        }
      }, 500);
    }
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
          localStorage.setItem(
            `${res.data.provider}User`,
            JSON.stringify(res.data)
          );
          window.location.reload();
          setUser(res.data);
        }
      });
  }
  useEffect(() => {
    if (
      (spotifyConnected && youtubeConnected) ||
      (youtubeConnected && appleConnected)||
      (spotifyConnected && appleConnected) 
    ) {
      setDisableBtn(true);
    } else {
      setDisableBtn(false);
    }
  }, [spotifyConnected,youtubeConnected,appleConnected]);

  return (
    <div className="connect">
      <div className="connect__wrapper">
        <button
          className="connect__wrapper--spotify"
          onClick={onClickSpotify}
          disabled={disableBtn}
        >
          <FaSpotify /> Spotify {spotifyConnected && "- Connected"}
        </button>
        <button
          className="connect__wrapper--youtube"
          onClick={onClickYoutube}
          disabled={disableBtn}
        >
          <FaYoutube /> Youtube Music {youtubeConnected && "- Connected"}
        </button>
        <button
          className="connect__wrapper--apple"
          onClick={onClickApple}
          disabled={disableBtn}
        >
          <FaApple /> Apple Music {appleConnected && "- Connected"}
        </button>
      </div>
    </div>
  );
};

export default Connect;
