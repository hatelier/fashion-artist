import { createSlice } from "@reduxjs/toolkit";

export const materialControl = createSlice({
  name: "materialControl",
  initialState: {
    materialArray: [],
  },
  reducers: {
    updateMaterialList: (state, action) => {
      state.materialArray = action.payload;
    },
  },
});

export const { updateMaterialList } = materialControl.actions;
export default materialControl.reducer;
