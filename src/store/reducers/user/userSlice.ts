import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Cookies from "universal-cookie";
import { userState, IUser } from "../../../types/IUser";
import {authorization, getUser }from './userAction'

const cookies = new Cookies()


const initialState: userState = {
    user: {
        token: cookies.get('token') || '',
        username: '',
        _id: '',
        avatar: ''
    },
    isLoading: false,
    isAuth: false
  };
  
  export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(authorization.pending, (state) => {
            state.isLoading = true;
            });
        builder.addCase(authorization.fulfilled, (state, action: PayloadAction<IUser>) => {
            state.user = action.payload;
            state.isAuth = true
            state.isLoading = false;
        });
        builder.addCase(getUser.pending, (state) => {
            state.isLoading = true;
            });
        builder.addCase(getUser.fulfilled, (state, action: PayloadAction<IUser>) => {
            state.user._id = action.payload._id
            state.user.avatar = action.payload.avatar
            state.user.username = action.payload.username
            state.isAuth = true
            state.isLoading = false;
        });
    },
  });
  
  export default userSlice.reducer;