import axios from "axios";
import { Cookie } from "cookie.js";

export const baseService = axios.create({
    baseURL: "https://unicode-unigram.onrender.com"
})

export const cookies = new Cookie()

export const setToken = () => {
    baseService.defaults.headers.common.Authorization = "Bearer " + cookies.get("token")
}
