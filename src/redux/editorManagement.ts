import { createSlice } from "@reduxjs/toolkit";

export const editorManagement = createSlice({
  name: "editorManagement",
  initialState: {
    modelBlob: null,
    productName: "",
    brandName: "",
    previewImageBlog: null,
    selectedPipeline: "",
    tags: "",
  },
  reducers: {
    updateModelBlob: (state, action) => {
      state.modelBlob = action.payload;
    },
    updateProductDetails: (state, action) => {
      console.log("payload", action.payload);
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});
export const { updateModelBlob, updateProductDetails } =
  editorManagement.actions;
export default editorManagement.reducer;
