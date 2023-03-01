import { createAsyncThunk } from "@reduxjs/toolkit";
import { Cookie } from "cookie.js";
import { baseService, cookies } from "../../../API/api";
import { IUser } from "../../../types/IUser";


export const authorization = createAsyncThunk(
  "user/authorization", 
  async function (userdate: {userName: string, password: string}){
    const res = await baseService.post<IUser>("/user/sign-in", {
      username: userdate.userName,
      password: userdate.password,
    })
    cookies.set('token', res.data.token)
    return res.data
})

export const getUser = createAsyncThunk(
    'user/token',
    async function (){
      const res = await baseService.get<IUser>('/user')
      return res.data
    }
)


