// @ts-nocheck
import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import { PersistConfig } from "redux-persist/es/types";
import routeManagement from "./routeManagement";

const reducers = combineReducers({
  routeManagement,
});

//redux persist configuration
const persistConfig: PersistConfig<any> = {
  key: "root",
  storage,
  whitelist: ["routeManagement"],
  timeout: null,
};

const persistedReducer = persistReducer(persistConfig, reducers);
export type RootState = ReturnType<typeof reducers.getState>;
export default configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== "production",
});
