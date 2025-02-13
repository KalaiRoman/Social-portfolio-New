import { createSlice } from "@reduxjs/toolkit";
export const Login_reducer = createSlice({
  name: "Login",
  initialState: {
    loginUser: {},
    loading: false,
    error: "",
  },
  reducers: {
    loginRequest: (state, action) => {
      state.loading = true;
      state.error = "";
      state.loginUser = {};
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.error = "";
      state.loginUser = action.payload;
    },
    loginFailed: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.loginUser = {};
    },
  },
});
export const { loginRequest, loginSuccess, loginFailed } =
  Login_reducer.actions;
export default Login_reducer.reducer;
