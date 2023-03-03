import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseService } from "../../../API/api";
import { IPost } from "../../../types/IPost";

export const uploadPosts = createAsyncThunk(
    "user/post",
     async function () {
    const res = await baseService.get("/posts");
    return res.data;
  });

  export const  deletePost = createAsyncThunk(
    'post/delete',
    async function (_id: string){
      await baseService.delete<string>(`/posts/${_id}`)
      return _id
    }

  )