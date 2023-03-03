import { postState, IPost } from "../../../types/IPost";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { deletePost, uploadPosts } from "../post/postAction";

const initialState: postState = {
  post: [],
  isLoading: false,
  step:0
};

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    setStep: (state, action: PayloadAction<number>) => {
      state.step = action.payload
    },
  },
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
    builder.addCase(deletePost.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(deletePost.fulfilled,(state,action:PayloadAction<string>) => {
      state.post = state.post.filter(post => post._id !== action.payload)
      state.isLoading = false
    })

  },

});

export default postSlice.reducer;

export const { setStep } = postSlice.actions