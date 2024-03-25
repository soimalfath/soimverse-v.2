import { axiosInc } from "../plugins/axios";

const URL = '/content'

export function apiGetPost () {
  return  axiosInc.get(`${URL}`)
}