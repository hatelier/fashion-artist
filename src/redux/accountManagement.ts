import { createSlice } from "@reduxjs/toolkit";

export const accountManagement = createSlice({
  name: "accountManagement",
  initialState: {
    userID: null,
    projectID: null,
    allCustomMaterials: null,
  },
  reducers: {
    updateUserId: (state, action) => {
      state.userID = action.payload;
    },
    updateProjectId: (state, action) => {
      state.projectID = action.payload;
    },
    updateCustomMaterial: (state, action) => {
      state.allCustomMaterials = action.payload;
    },
  },
});
export const { updateCustomMaterial, updateUserId, updateProjectId } =
  accountManagement.actions;
export default accountManagement.reducer;
