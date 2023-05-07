import { createSlice } from "@reduxjs/toolkit";

const savedConfigs = createSlice({
  name: "savedConfigs",
  initialState: <any>{
    presets: [],
    unUsedObjects: [],
  },
  reducers: {
    updatePresets: (state, action) => {
      state.presets = [...state.presets, action.payload];
    },
    updateUnUsedObjects: (state, action) => {
      state.unUsedObjects = action.payload;
    },
    massUpdatePresets: (state, action) => {
      state.presets = action.payload;
    },
  },
});
export const { updatePresets, updateUnUsedObjects, massUpdatePresets } =
  savedConfigs.actions;
export default savedConfigs.reducer;
