import React from "react";
import { FaYoutube } from "react-icons/fa";
import "./MergeYoutube.scss";
const MergeYoutube = ({ list,selected,setSelected}) => {
 
 
  return (
    <div className="container">
      <h2 className="container__youtube">
        <FaYoutube /> Youtube Music
      </h2>
      <div className="container__list">

      {list?.length > 0 && (
          <ul>
          {list.map((p) => (
            <li key={p.id}>
              <div className="container__list--item">
                <p>{p.snippet.title}</p>
                
                <button
                disabled={selected.type}
                className="container__list--select"
                  onClick={() => {
                      setSelected((prevState) => ({
                        ...prevState,
                        type: "youtube",
                        playlistId:p.id,
                        totalTracks: p.tracks.total
                      }));
                      
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

export default MergeYoutube;
