// @ts-nocheck
import { createSlice } from "@reduxjs/toolkit";
import { mediaDataJson } from "../EditorEngine/editorComponents/Banner";
export const cameraRedux = createSlice({
  name: "cameraRedux",
  initialState: {
    cameraStatus: mediaDataJson,
  },
  reducers: {
    updateResetCameraState: (state, action) => {
      state.cameraStatus = mediaDataJson;
    },
    updateCameraState: (state, action) => {
      state.cameraStatus[action.payload.key].value =
        action.payload[action.payload.key].value;
    },
  },
});
export const { updateResetCameraState, updateCameraState } =
  cameraRedux.actions;
export default cameraRedux.reducer;
