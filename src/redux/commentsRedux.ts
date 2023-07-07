
import { createSlice } from "@reduxjs/toolkit";


export const commentsRedux = createSlice({
  name: "commentsRedux",
  initialState: {
    enableComments: false,
    annotationList: [],
    triggerDelete: 0,
  },

  reducers: {
    updateTriggerDelete: (state) => {
      state.triggerDelete = state.triggerDelete + 1;
    },
    updateEnableComments: (state) => {
      state.enableComments = true;
    },
    updateDiableComments: (state) => {
      state.enableComments = false;
    },
    updateAnnotationList: (state, action) => {
      state.annotationList = action.payload;
    },
  },
});

export const {
  updateTriggerDelete,
  updateAnnotationList,
  updateDiableComments,
  updateEnableComments,
} = commentsRedux.actions;
export default commentsRedux.reducer;
