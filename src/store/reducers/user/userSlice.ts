import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Cookies from "universal-cookie";
import { userState, IUser } from "../../../types/IUser";
import {authorization }from './userAction'

const cookies = new Cookies()


const initialState: userState = {
    user: {
        token: cookies.get('token') || '',
        username: cookies.get('username') || '',
        _id: cookies.get('_id') || '',
        avatar: cookies.get('avatar') || ''
    },
    isLoading: false,

  };
  
  export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(authorization.pending, (state) => {
            state.isLoading = true;
            });
        builder.addCase( authorization.fulfilled, (state, action: PayloadAction<IUser>) => {
            state.isLoading = false;
            state.user = action.payload;
        });
    },
  });
  
  export default userSlice.reducer;