import { createSlice } from "@reduxjs/toolkit";
export const settingsPanel = createSlice({
  name: "settingsPanel",
  initialState: {
    dimensions: false,
    wireframe: false,
    axis: false,
    polycount: false,
    uvmap: false,
    toggleLights: true,
  },
  reducers: {
    updateSettingsBoolen: (state, action) => {
      // @ts-ignore
      state[action.payload] = !state[action.payload];
    },
  },
});
export const { updateSettingsBoolen } = settingsPanel.actions;
export default settingsPanel.reducer;
