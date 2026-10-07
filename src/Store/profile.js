import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {},
  token: localStorage.getItem("token") || null
}

const userSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    login: (state, action) => {
      if (action?.payload) {
        const { user, token } = action?.payload
        if (user && token) {
          localStorage.setItem("token", token);
          localStorage.setItem("user", user);
          state.token = token;
          state.user = user
        }
      }
    },
    logout: (state) => {
      state.token = null
      state.user = {}
      localStorage.clear();
    },
  }
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;