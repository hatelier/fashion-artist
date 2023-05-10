import { createSlice } from "@reduxjs/toolkit";

const savedCameraControls = createSlice({
  name: "savedCameraControls",
  initialState: {
    cameraPosition: [0, 0, 13],
    ambientLight: 0.6,
    directionalLight: 1,
    cameraProps: {
      fov: 50,
      x: 0,
      y: 0,
      z: 13,
      zoom: 4,
    },
  },
  reducers: {
    updateCameraProps: (state, action) => {
      state.cameraProps = {
        ...state.cameraProps,
        ...action.payload,
      };
    },
    updateAmbientLight: (state, action) => {
      state.ambientLight = action.payload;
    },
    updateDirLight: (state, action) => {
      state.directionalLight = action.payload;
    },
  },
});

export const { updateCameraProps, updateDirLight, updateAmbientLight } =
  savedCameraControls.actions;
export default savedCameraControls.reducer;
