import { createSlice } from "@reduxjs/toolkit";

export const accountManagement = createSlice({
  name: "accountManagement",
  initialState: <any>(<unknown>{
    userID: null,
    projectID: null,
  }),
  reducers: {
    updateUserId: (state, action) => {
      state.userID = action.payload;
    },
    updateProjectId: (state, action) => {
      state.projectID = action.payload;
    },
  },
});
export const { updateUserId, updateProjectId } = accountManagement.actions;
export default accountManagement.reducer;
