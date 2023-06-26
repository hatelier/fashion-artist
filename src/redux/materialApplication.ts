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
    blockTopBar: true,
    modelUrl: null,
    modelLoadRate: 0,
    modelMaterialReload: 0,
  }),
  reducers: {
    updateMaterialReload: (state) => {
      state.modelMaterialReload = state.modelMaterialReload + 1;
    },
    updateMaterialReqs: (state, action) => {
      state.materialReqs = action.payload;
    },
    updateTopBar: (state) => {
      state.blockTopBar = !state.blockTopBar;
    },
    updateModelUrl: (state, action) => {
      state.modelUrl = action.payload;
    },
    updateModelLoadRate: (state, action) => {
      state.modelLoadRate = Math.floor(action.payload * 100);
    },
  },
});

export const {
  updateModelLoadRate,
  updateModelUrl,
  updateMaterialReqs,
  updateTopBar,
  updateMaterialReload,
} = materialApplication.actions;
export default materialApplication.reducer;
