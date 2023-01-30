import axios from "axios";
import React, { useEffect, useState } from "react";
import convertPlaylist from "../../../utils/convertPlaylist";
import "./Merge.scss";
import MergeSpotify from "./MergeSpotify";
import MergeYoutube from "./MergeYoutube";
const Merge = () => {
  const [spotifyItems, setSpotifyItems] = useState([]);
  const [youtubeItems, setYoutubeItems] = useState([]);
  const [selected, setSelected] = useState({
    type: "",
    playlistId: "",
    totalTracks: "",
  });
  const [btnText, setBtnText] = useState("Continue");
  function getSpotifyPlaylist() {
    axios
      .get(import.meta.env.VITE_GET_SPOTIFY_PLAYLIST, {
        withCredentials: true,
      })
      .then((res) => {
        setSpotifyItems(res.data.items);
        
      });
  }
  
  function getYoutubePlaylist() {
    axios
      .get(import.meta.env.VITE_GET_GOOGLE_PLAYLIST, { withCredentials: true })
      .then((res) => {
        setYoutubeItems(res.data.items);
      });
  }
  useEffect(() => {
    getSpotifyPlaylist();
    getYoutubePlaylist();
  }, []);
  return (
    <div className="merge">
      <div className="merge__wrapper">
        <MergeSpotify
          list={spotifyItems}
          selected={selected}
          setSelected={setSelected}
        />
        <div className="merge__text">
          <p>Select Only One of the playlist</p>
          <button
            style={{
              backgroundColor: `${selected?.type ? "white" : "grey"}`,
            }}
            className="merge__continue"
            disabled={!selected}
            onClick={() => {
              setBtnText("Converting...");
              convertPlaylist(selected, setBtnText);
            }}
          >
            {btnText}
          </button>
        </div>
        <MergeYoutube
          list={youtubeItems}
          selected={selected}
          setSelected={setSelected}
        />
      </div>
    </div>
  );
};

export default Merge;
