// @ts-nocheck
import {configureStore} from "@reduxjs/toolkit";
import logger from "redux-logger";
import {persistStore, persistReducer, createTransform} from "redux-persist";
import {combineReducers} from "redux";
import storage from "redux-persist/lib/storage";
import {PersistConfig} from "redux-persist/es/types";

//all redux files
import routeManagement from "./routeManagement";
import editorManagement from "./editorManagement";
import {glbToBase64} from "../utils";

const reducers = combineReducers({
  routeManagement,
  editorManagement,
});

// a middleware to save binary files.
const glbTransform = createTransform(
    (inboundState, key) => {
      if (key === "editorManagement" && inboundState.modelBlob) {
        console.log("Inbound state:", {
          ...inboundState,
          modelBlob: glbToBase64(inboundState.modelBlob),
        });
        return {
          ...inboundState,
          modelBlob: glbToBase64(inboundState.modelBlob),
        };
      }
      return inboundState;
    },
    (outboundState, key) => {
      if (key === "editorManagement" && outboundState.modelBlob) {
        console.log("Outbound state:", inboundState);
        return {
          ...outboundState,
          modelBlob: new Blob([atob(outboundState.modelBlob)], {
            type: "model/gltf-binary",
          }),
        };
      }
      return outboundState;
    }
);

//redux persist configuration
const persistConfig: PersistConfig<any> = {
  key: "root",
  storage,
  whitelist: ["routeManagement", "editorManagement"],
  transforms: [glbTransform],
  timeout: null,
};

const persistedReducer = persistReducer(persistConfig, reducers);
export type RootState = ReturnType<typeof reducers.getState>;
export default configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== "production",
});
