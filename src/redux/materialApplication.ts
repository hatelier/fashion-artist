// @ts-nocheck
import { createSlice } from "@reduxjs/toolkit";

export const materialApplication = createSlice({
  name: "materialApplication",
  initialState: {
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
    textMeshArr: [],
    textTrigger: 0,
    currentBackground: "#f0f0f0",
    currentBackgroundImage: null,
    triggerHDRender: false,
    versionTrigger: [],
    presetState: false,
    controlPublishModal: false,
    currentPublishState: false,
  },
  reducers: {
    updateSetPublishState: (state, action) => {
      state.currentPublishState = action.payload;
    },
    updateCtrlPublishModal: (state, action) => {
      state.controlPublishModal = action.payload;
    },
    updatePresetState: (state, action) => {
      state.presetState = action.payload;
    },
    updateVersionTrigger: (state, action) => {
      state.versionTrigger = action.payload;
    },
    updateTriggerHD: (state, action) => {
      state.triggerHDRender = action.payload;
    },
    updateCurrBackImage: (state, action) => {
      state.currentBackgroundImage = action.payload;
    },
    updateCurrBack: (state, action) => {
      state.currentBackground = action.payload;
    },
    updateTextTrigger: (state) => {
      state.textTrigger = state.textTrigger + 1;
    },
    updateTextMesh: (state, action) => {
      state.textMeshArr = action.payload;
    },
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
  updateSetPublishState,
  updateCtrlPublishModal,
  updatePresetState,
  updateVersionTrigger,
  updateTriggerHD,
  updateCurrBackImage,
  updateTextTrigger,
  updateTextMesh,
  updateModelLoadRate,
  updateModelUrl,
  updateMaterialReqs,
  updateTopBar,
  updateMaterialReload,
  updateCurrBack,
} = materialApplication.actions;
export default materialApplication.reducer;
