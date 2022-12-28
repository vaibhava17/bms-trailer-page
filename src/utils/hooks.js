import axios from "axios";

// Fetch data from api using axios
export async function get(url) {
  const response = await axios.get(url);
  return response.data;
}

// Indexing for video player
export function indexCount(index, count) {
  let id = index + 1
  return Math.ceil(id / count) * count - count
}

// Get youtube video id from url
export function getVideoId (url) {
  const videoId = url.split('v=')[1];
  const ampersandPosition = videoId.indexOf('&');
  if (ampersandPosition !== -1) {
    return videoId.substring(0, ampersandPosition);
  }
  return videoId;
}