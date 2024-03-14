import axios from "axios"

const URL = 'https://ipapi.co/json'

export function apiGetIP() {
    return axios.get(URL)
}

