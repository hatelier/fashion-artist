import { createSlice } from "@reduxjs/toolkit";

const savedConfigs = createSlice({
  name: "savedConfigs",
  initialState: <any>{
    presets: [],
    unUsedObjects: [],
    //check whether the material is being loaded for the first time.
    firstLoad: true,
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
    setFirstLoad: (state, action) => {
      state.firstLoad = action.payload;
    },
  },
});
export const {
  updatePresets,
  updateUnUsedObjects,
  massUpdatePresets,
  setFirstLoad,
} = savedConfigs.actions;
export default savedConfigs.reducer;
