import { createSlice } from "@reduxjs/toolkit";

export const meshControls = createSlice({
  name: "meshControls",
  initialState:{
    modelGLB: null
  },
  reducers: {
    updateModelGLB: (state, action) => {
      state.modelGLB = action.payload;
    }
  }
});

export const { updateModelGLB } = meshControls.actions;
export default meshControls.reducer;

