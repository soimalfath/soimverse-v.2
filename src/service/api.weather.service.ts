import { axiosWeather } from "../plugins/axios";
const URL = '/data/2.5/weather'


export function apiGetCurrentWeather(lon : number, lat : number) {
    return axiosWeather.get(`${URL}?lat=${lat}&lon=${lon}&lang=id&units=metric`)
}