import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseService } from "../../../API/api";

export const uploadPosts = createAsyncThunk(
    "user/post",
     async function () {
    const res = await baseService.get("/posts");
    return res.data;
  });

  