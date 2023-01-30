import React, { useState } from "react";
import { FaSpotify } from "react-icons/fa";
import "./MergeSpotify.scss";
const MergeSpotify = ({ list,selected,setSelected }) => {
  
  return (
    <div className="container">
      <h2 className="container__spotify">
        <FaSpotify /> Spotify
      </h2>
      <div className="container__list" disabled={selected}>
        {list?.length > 0 && (
          <ul>
            {list.map((p) => (
              <li key={p.id}>
                <div className="container__list--item">
                  <p>Name: {p.name}</p>
                  <button
                  disabled={selected.type}
                    className="container__list--select"
                    onClick={() => {
                      setSelected(prevState=> ({...prevState,type:'spotify',playlistId:p.id,totalTracks:p.tracks.total}));
                      
                    }}
                  >
                    Select
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default MergeSpotify;
