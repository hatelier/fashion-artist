import { createSlice } from "@reduxjs/toolkit";

export const routeManagement = createSlice({
  name: "routeManagement",
  initialState: {
    currConfigTab: 0,
  },
  reducers: {
    updateCurrConfigTab: (state, action) => {
      state.currConfigTab = action.payload;
    },
  },
});

export const { updateCurrConfigTab } = routeManagement.actions;
export default routeManagement.reducer;
