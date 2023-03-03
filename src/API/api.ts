import axios from "axios";
import  Cookie from "cookie.js";
import { store } from "../store/store";

export const baseService = axios.create({
    baseURL: "https://unicode-unigram-xmfu.onrender.com"
})



export const setToken = () => {
    baseService.defaults.headers.common.Authorization = "Bearer " + Cookie.get("token")
}


export const logout = () : void => {
    Cookie.remove('token');
    store.dispatch(logout)
}

baseService.interceptors.response.use((res)=>{return res;}, (error)=>{
    if(error.response.status === 401){
        logout()
    }
    return error
})

export default baseService