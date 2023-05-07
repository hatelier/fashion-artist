import { createSlice } from "@reduxjs/toolkit";
import { MaterialControlsProps } from "../EditorEngine/PropsControls";

export const materialControl = createSlice({
  name: "materialControl",
  initialState: <MaterialControlsProps>(<unknown>{
    materialArray: [],
    materialDimensions: {},
    cameraPosition: [0, 0, 13],
    ambientLight: 0.6,
    directionalLight: 1,
  }),
  reducers: {
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
  updateMaterialList,
  updateMaterialDimensions,
  updateCameraPostion,
  updateAmbientLight,
  updateDirLight,
} = materialControl.actions;
export default materialControl.reducer;
