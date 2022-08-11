import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    token: null,
  },
  reducers: {
    login: (state, actions) => {
      state.user = actions.payload.user;
      state.token = actions.payload.token;
    },
    logOut: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, logOut } = userSlice.actions;

export default userSlice.reducer;
