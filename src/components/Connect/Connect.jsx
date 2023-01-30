import axios from "axios";
import React from "react";
import { FaSpotify, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import getCookie from "../../../utils/getCookie";
import "./Connect.scss";
const Connect = () => {
  const spotifyConnected = getCookie("spotify") ? true : false;

  const youtubeConnected = getCookie("google") ? true : false;

  function onClickSpotify() {
    window.location.href = import.meta.env.VITE_SPOTIFY_LOGIN;
  }

  function onClickYoutube() {
    window.location.href = import.meta.env.VITE_GOOGLE_LOGIN;
  }
function getGooglePlaylists(){
  axios
    .get(import.meta.env.VITE_GET_GOOGLE_PLAYLIST, { withCredentials: true })
    .then((res) => console.log(res.data));
}
  return (
    <div className="connect">
      <div className="connect__wrapper">
        <button className="connect__wrapper--spotify" onClick={onClickSpotify}>
          <FaSpotify /> Spotify {spotifyConnected && "- Connected"}
        </button>
        <button className="connect__wrapper--youtube" onClick={onClickYoutube}>
          <FaYoutube /> Youtube Music {youtubeConnected && "- Connected"}
        </button>
        <Link to="/merge"
          style={{
            backgroundColor: `${
              spotifyConnected && youtubeConnected ? "white" : "grey"
            }`,
          }}
          className="connect__wrapper--continue"
        >
          Continue
        </Link>
      
      </div>
      
      
    </div>
  );
};

export default Connect;
