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
    toggleVisiblityPresets: (state, action) => {
      const { presetName, matName, requiredState } = action.payload;
      state.presets.map((preset: any) => {
        if (preset.name === presetName) {
          let materialIndex = preset.materialList.indexOf(matName);
          preset.visibility[materialIndex] = requiredState;
          return preset;
        }
        return preset;
      });
    },
  },
});
export const {
  updatePresets,
  updateUnUsedObjects,
  massUpdatePresets,
  setFirstLoad,
  toggleVisiblityPresets,
} = savedConfigs.actions;
export default savedConfigs.reducer;
