import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseService } from "../../../API/api";


export const authorization = createAsyncThunk(
  "user/authorization", 
  async function (userdate: {userName: string, password: string}){
    const res = await baseService.post("/user/sign-in", {
      username: userdate.userName,
      password: userdate.password 
    })
    console.log(res);
    return res
})


export const Post = createAsyncThunk(
  "user/post",
   async function () {
  const res = await fetch(await baseService.post("/posts", {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify({
      description: "Добро пожаловать в unicode!",
      image: File,
    }),
  }));
  const data = await res.json();
  return data;
});
