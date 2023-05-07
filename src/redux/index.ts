// @ts-nocheck
import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { createTransform, persistReducer } from "redux-persist";
import { combineReducers } from "redux";
import { PersistConfig } from "redux-persist/es/types";

//all redux files
import routeManagement from "./routeManagement";
import editorManagement from "./editorManagement";
import materialControl from "./materialControl";
import renderSlice from "./triggerRedux";
import savedConfigs from "./savedConfigs";
import * as localforage from "localforage";

const reducers = combineReducers({
  routeManagement,
  editorManagement,
  materialControl,
  renderSlice,
  savedConfigs,
});

// a middleware to save binary files.
const glbTransform = createTransform(
  async (inboundState, key) => {
    if (key === "editorManagement" && inboundState.modelBlob) {
      const file = inboundState.modelBlob;
      return {
        ...inboundState,
        modelBlob: file,
      };
    }
    return inboundState;
  },
  (outboundState, key) => {
    if (key === "editorManagement" && outboundState.modelBlob) {
      const file = outboundState.modelBlob;
      return {
        ...outboundState,
        modelBlob: file,
      };
    }
    return outboundState;
  }
);

//redux persist configuration
const persistConfig: PersistConfig<any> = {
  key: "root",
  storage: localforage,
  whitelist: ["routeManagement", "editorManagement", "savedConfigs"],
  // transforms: [glbTransform],
  timeout: null,
};

const persistedReducer = persistReducer(persistConfig, reducers);
export type RootState = ReturnType<typeof reducers.getState>;
export default configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== "production",
});
