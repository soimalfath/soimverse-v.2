import { axiosInc } from "../plugins/axios";
const URL = '/weather'


export function apiGetCurrentWeather(lon : number, lat : number) {
    return axiosInc.get(`${URL}?lat=${lat}&lon=${lon}`)
}