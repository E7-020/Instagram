import { postState, IPost } from "../../../types/IPost";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { uploadPosts } from "../post/postAction";

const initialState: postState = {
  post: [],
  isLoading: false,
};

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(uploadPosts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      uploadPosts.fulfilled,
      (state, action: PayloadAction<IPost[]>) => {
        state.isLoading = false;
        state.post = action.payload;
      }
    );

  },

});

export default postSlice.reducer;
