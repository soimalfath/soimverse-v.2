import axios from "axios";

const URL: string | undefined =  import.meta.env.VITE_REACT_APP_OPEN_WEATHER_BASE_URL;
const APIKEY: string | undefined =  import.meta.env.VITE_REACT_APP_OPEN_WEATHER_API_KEY;

if (!URL || !APIKEY) {
  throw new Error("URL atau APIKEY tidak ditemukan di environment variables.");
}


export const axiosWeather = axios.create({
  baseURL: URL
});

axiosWeather.interceptors.request.use(
  (config) => {
    const { params } = config;

    config.params = {
      lat:params,
      lon: params,
      appid: APIKEY
    };

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);



