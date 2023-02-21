import { postState, IPost } from "../../../types/IInsta";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Post } from "./SignInAction";

const initialState: postState = {
  posts: [],
  isLoading: false,
};

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(Post.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      Post.fulfilled,
      (state, action: PayloadAction<IPost[]>) => {
        state.isLoading = false;
        state.posts = action.payload;
      }
    );

  },

});

export default postSlice.reducer;
