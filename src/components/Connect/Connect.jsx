import React from "react";
import { FaSpotify, FaApple, FaYoutube } from "react-icons/fa";
import './Connect.scss'

const Connect = () => {
  return (
    <div className="connect">
      <div className="connect__wrapper">
        <button className="connect__wrapper--spotify">
          <FaSpotify /> Spotify
        </button>
        <button className="connect__wrapper--youtube">
          <FaYoutube /> Youtube Music
        </button>
        <button className="connect__wrapper--apple">
          <FaApple /> Apple Music
        </button>
      </div>
    </div>
  );
};

export default Connect;
