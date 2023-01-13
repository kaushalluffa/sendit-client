import axios from "axios";
import React, { useState } from "react";
import { FaSpotify, FaYoutube } from "react-icons/fa";
import getCookie from "../../../utils/getCookie";
import "./Connect.scss";
const Connect = () => {
  const spotifyConnected = getCookie("spotify") ? true : false;

  const youtubeConnected = getCookie("google") ? true : false;

  // const [disableBtn, setDisableBtn] = useState(false);
  function onClickSpotify() {
    window.location.href = "http://localhost:8000/spotifylogin";
  }

  function onClickYoutube() {
    window.location.href = "http://localhost:8000/googlelogin";
  }

  return (
    <div className="connect">
      <div className="connect__wrapper">
        <button
          className="connect__wrapper--spotify"
          onClick={onClickSpotify}
          // disabled={disableBtn}
        >
          <FaSpotify /> Spotify {spotifyConnected && "- Connected"}
        </button>
        <button
          className="connect__wrapper--youtube"
          onClick={onClickYoutube}
          // disabled={disableBtn}
        >
          <FaYoutube /> Youtube Music {youtubeConnected && "- Connected"}
        </button>
      </div>
    </div>
  );
};

export default Connect;
