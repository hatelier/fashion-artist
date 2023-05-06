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
      state.productName = action.payload.productName;
      state.brandName = action.payload.brandName;
      state.previewImageBlog = action.payload.previewImageBlog;
      state.selectedPipeline = action.payload.selectedPipeline;
      state.tags = action.payload.tags;
    },
  },
});
export const { updateModelBlob, updateProductDetails } =
  editorManagement.actions;
export default editorManagement.reducer;
