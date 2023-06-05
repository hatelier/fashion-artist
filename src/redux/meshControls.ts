import { createSlice } from "@reduxjs/toolkit";

export const meshControls = createSlice({
  name: "meshControls",
  initialState: <any>(<unknown>{
    modelGLB: null
  }),
  reducers: {
    updateModelGLB: (state, action) => {
      state.modelGLB = action.payload;
    }
  }
});

export const { updateModelGLB } = meshControls.actions;
export default meshControls.reducer;

