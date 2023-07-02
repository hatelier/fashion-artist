import { createSlice } from "@reduxjs/toolkit";

export const commentsRedux = createSlice({
  name: "commentsRedux",
  initialState: <any>(<unknown>{
    enableComments: false,
  }),
  reducers: {
    updateEnableComments: (state) => {
      state.enableComments = true;
    },
  },
});

export const { updateEnableComments } = commentsRedux.actions;
export default commentsRedux.reducer;
