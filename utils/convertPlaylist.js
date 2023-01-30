import axios from "axios";

export default function convertPlaylist(selected,setBtnText) {
  if (selected.type === "spotify") {
    const body = {
        playlistId: selected.playlistId,
        totalTracks: selected.totalTracks
    }
    axios
      .post(import.meta.env.VITE_CONVERT_TO_YOUTUBE, body, {
        withCredentials: true,
      })
      .then((res) => {
        setBtnText(res.data);
      });
  }
}
