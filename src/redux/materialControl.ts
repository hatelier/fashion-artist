import { createSlice } from "@reduxjs/toolkit";
import { MaterialControlsProps } from "../EditorEngine/PropsControls";

export const materialControl = createSlice({
  name: "materialControl",
  initialState: <MaterialControlsProps>{
    materialArray: [],
    materialDimensions: {},
  },
  reducers: {
    updateMaterialList: (state, action) => {
      state.materialArray = action.payload;
    },
    updateMaterialDimensions: (state, action) => {
      state.materialDimensions = action.payload;
    },
  },
});

export const { updateMaterialList, updateMaterialDimensions } =
  materialControl.actions;
export default materialControl.reducer;
