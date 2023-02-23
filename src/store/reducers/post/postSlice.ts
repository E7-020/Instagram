import { postState, IPost } from "../../../types/IPost";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { post } from "../post/postAction";

const initialState: postState = {
  post: [],
  isLoading: false,
};

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(post.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      post.fulfilled,
      (state, action: PayloadAction<IPost[]>) => {
        state.isLoading = false;
        state.post = action.payload;
      }
    );

  },

});

export default postSlice.reducer;