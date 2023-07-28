import { createSlice } from "@reduxjs/toolkit";
export const previewRedux = createSlice({
  name: "previewRedux",
  initialState: {
    materialList: null,
    currentModel: null,
    arModel: null,
    enableAR: false,
    presetState: false,
  },
  reducers: {
    updatePresetState: (state, action) => {
      state.presetState = action.payload;
    },
    updateEnableAR: (state) => {
      state.enableAR = !state.enableAR;
    },
    updateArModel: (state, action) => {
      state.arModel = action.payload;
    },
    updateCurrentModel: (state, action) => {
      state.currentModel = action.payload;
    },
    updateMaterialListPreview: (state, action) => {
      state.materialList = action.payload;
    },
  },
});

export const {
  updatePresetState,
  updateEnableAR,
  updateArModel,
  updateCurrentModel,
  updateMaterialListPreview,
} = previewRedux.actions;
export default previewRedux.reducer;
