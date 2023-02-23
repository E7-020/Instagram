import { createAsyncThunk } from "@reduxjs/toolkit";
import { Cookie } from "cookie.js";
import { baseService } from "../../../API/api";
import { IUser } from "../../../types/IUser";


export const authorization = createAsyncThunk(
  "user/authorization", 
  async function (userdate: {userName: string, password: string}){
    const res = await baseService.post<IUser>("/user/sign-in", {
      username: userdate.userName,
      password: userdate.password ,
    })
    const cookies = new Cookie()
    
    cookies.set('_id', res.data._id)
    cookies.set('avatar', res.data.avatar)
    cookies.set('token', res.data.token)
    cookies.set('username', res.data.username)
    console.log(res.data);
    
    return res.data
})



