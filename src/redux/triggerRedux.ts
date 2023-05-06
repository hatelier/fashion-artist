import { createSlice } from "@reduxjs/toolkit";

export const renderSlice = createSlice({
  name: "renderTrigger",
  initialState: {
    trigger: false,
  },
  reducers: {
    triggerRender: (state) => {
      state.trigger = !state.trigger;
    },
  },
});

export const { triggerRender } = renderSlice.actions;
export default renderSlice.reducer;
