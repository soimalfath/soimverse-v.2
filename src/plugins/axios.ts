import axios from "axios";

const URL: string | undefined =  import.meta.env.VITE_REACT_APP_BASE_URL;

if (!URL) {
  throw new Error("URL atau tidak ditemukan di environment variables.");
}


export const axiosInc = axios.create({
  baseURL: URL
});




