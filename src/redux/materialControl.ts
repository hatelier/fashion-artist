import { createSlice } from "@reduxjs/toolkit";

export const materialControl = createSlice({
  name: "materialControl",
  initialState: <any>(<unknown>{
    materialArray: [],
    materialDimensions: {},
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
    //   here are the on-editor configs
    currentLight: {
      lightType: null,
      lightColor: "",
      lightIntensity: 0,
      distance: 0,
      x: 0,
      y: 0,
      z: 0,
    },
  }),
  reducers: {
    updateCameraProps: (state, action) => {
      state.cameraProps = {
        ...state.cameraProps,
        ...action.payload,
      };
    },
    updateMaterialList: (state, action) => {
      state.materialArray = action.payload;
    },
    updateMaterialDimensions: (state, action) => {
      state.materialDimensions = action.payload;
    },
    updateCameraPostion: (state, action) => {
      state.cameraPosition = action.payload;
    },
    updateAmbientLight: (state, action) => {
      state.ambientLight = action.payload;
    },
    updateDirLight: (state, action) => {
      state.directionalLight = action.payload;
    },
  },
});

export const {
  updateCameraProps,
  updateMaterialList,
  updateMaterialDimensions,
  updateCameraPostion,
  updateAmbientLight,
  updateDirLight,
} = materialControl.actions;
export default materialControl.reducer;
