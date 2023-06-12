import { createSlice } from "@reduxjs/toolkit";
export const previewRedux = createSlice({
  name: "previewRedux",
  initialState: <any>(<unknown>{
    materialList: null,
    currentModel: "/models/defaultCude.glb",
  }),
  reducers: {
    updateCurrentModel: (state, action) => {
      state.currentModel = action.payload;
    },
    updateMaterialListPreview: (state, action) => {
      state.materialList = action.payload;
    },
  },
});

export const { updateCurrentModel, updateMaterialListPreview } =
  previewRedux.actions;
export default previewRedux.reducer;
