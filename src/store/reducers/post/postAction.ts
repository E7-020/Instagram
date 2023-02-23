import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseService } from "../../../API/api";

export const post = createAsyncThunk(
    "user/post",
     async function () {
    const res = await baseService.post("/posts", {
        description: "Добро пожаловать в unicode!",
        image: File,
      });
    return res.data;
  });