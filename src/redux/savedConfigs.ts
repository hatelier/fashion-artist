import { createSlice } from "@reduxjs/toolkit";

const savedConfigs = createSlice({
  name: "savedConfigs",
  initialState: <any>{
    presets: [],
    unUsedObjects: [],
    //check whether the material is being loaded for the first time.
    firstLoad: true,
    loadProductMeshes: false,
    loadProuctMaterials: false,
    //config controls
    materialConfiguration: {},
  },
  reducers: {
    //here the config controls object
    updateMaterialConfig: (state, action) => {
      state.materialConfiguration = {
        ...state.materialConfiguration,
        ...action.payload,
      };
    },
    updateProdMeshState: (state, action) => {
      state.loadProductMeshes = !state.loadProductMeshes;
    },
    updateProdMatState: (state, action) => {
      state.loadProuctMaterials = !state.loadProuctMaterials;
    },
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
  updateMaterialConfig,
  updateProdMeshState,
  updateProdMatState,
  updatePresets,
  updateUnUsedObjects,
  massUpdatePresets,
  setFirstLoad,
  toggleVisiblityPresets,
} = savedConfigs.actions;
export default savedConfigs.reducer;
