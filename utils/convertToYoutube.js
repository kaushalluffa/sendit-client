import axios from "axios";

export default function convertToYoutube() {
  console.log("convertToYoutube");
  axios
    .get(import.meta.env.VITE_CONVERT_TO_YOUTUBE, { withCredentials: true })
    .then((res) => {});
}
