import { createSlice } from "@reduxjs/toolkit";
const dropdown_reducer = createSlice({
  name: "dropdown",
  initialState: {
    status: false,
    loading: false,
    error: "",
  },
  reducers: {
    updateStatusDropdown(state, action) {
      state.status = !state.status;
    },
  },
});

export const { updateStatusDropdown } = dropdown_reducer.actions;
export default dropdown_reducer.reducer;
