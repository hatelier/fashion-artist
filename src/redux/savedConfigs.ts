import { createSlice } from "@reduxjs/toolkit";

const savedConfigs = createSlice({
  name: "savedConfigs",
  initialState: <any>{
    presets: [],
  },
  reducers: {
    updatePresets: (state, action) => {
      state.presets = [...state.presets, action.payload];
    },
  },
});
export const { updatePresets } = savedConfigs.actions;
export default savedConfigs.reducer;
