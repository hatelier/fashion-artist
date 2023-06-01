import { createSlice } from "@reduxjs/toolkit";

export const materialApplication = createSlice({
  name: "materialApplication",
  initialState: <any>(<unknown>{
    materialReqs: {
      map: null,
      aoMap: null,
      normalMap: null,
      roughnessMap: null,
    },
    currentPart: null,
  }),
  reducers: {
    updateMaterialReqs: (state, action) => {
      state.materialReqs = action.payload;
    },
  },
});

export const { updateMaterialReqs } = materialApplication.actions;
export default materialApplication.reducer;
