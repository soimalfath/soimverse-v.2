import { apiGetCurrentWeather } from "../service/api.weather.service";
import { apiGetIP } from "../service/api.getIP.service";
import { geoLocated } from "../common/interface";
import { useGeolocated } from "react-geolocated";

import { useState, useEffect } from "react";

const CardWeather = () => {
  const [dataWeather, setDataWeather] = useState({
    icon: "",
    city: "",
    temp: 0,
    weather: "",
  });

  const { coords, isGeolocationAvailable, isGeolocationEnabled }: geoLocated = useGeolocated({
    positionOptions: {
      enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
  });

  useEffect(() => {
    const currentWeather = async (lon: number, lat: number) => {
      try {
        const response = await apiGetCurrentWeather(lon, lat);
        setDataWeather({
          icon: response.data.data.icon,
          city: response.data.data.city,
          temp: response.data.data.temp,
          weather: response.data.data.weather,
        });
      } catch (err) {
        console.error(err);
      }
    };
    const getWeatherByIpUs = async () => {
      try {
        const data = await apiGetIP();
        if (data) {
          await currentWeather(data.data.longitude, data.data.latitude);
          console.log("byip");
        }
      } catch (error) {
        console.error(error);
      }
    };

    const getWeatherByGeo = async () => {
      try {
        if (coords) {
          await currentWeather(coords.longitude, coords.latitude);
          console.log("bygeo");
        }
      } catch (err) {
        console.error(err);
      }
    };

    if (isGeolocationEnabled) {
      getWeatherByGeo();
    } else {
      getWeatherByIpUs();
    }
  }, [coords, isGeolocationAvailable, isGeolocationEnabled]);
  return (
    <section className="fixed z-10 top-1 rounded-tr-none rounded-br-none backdrop-blur-xl border-r-0 rounded-lg  shadow-lg w-auto h-auto right-0">
      <div className="px-2 py-1">
        {dataWeather.city ? (
          <div className="flex items-center justify-center pr-2">
            <div>
              <img className="h-[5rem] object-cover" src={dataWeather.icon} alt="" />
            </div>

            <div>
              <div className="text-white">{dataWeather.city}</div>
              <div className="text-white text-xs">{dataWeather.temp.toFixed(2).substring(0, 2)}° C</div>
              <div className="capitalize text-white text-xs">{dataWeather.weather}</div>
            </div>
          </div>
        ) : (
          <div className="skeleton w-[190px]  backdrop-blur-xl h-[90px]"></div>
        )}
      </div>
    </section>
  );
};

export default CardWeather;
