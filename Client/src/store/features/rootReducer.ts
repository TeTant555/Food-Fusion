import { combineReducers } from "@reduxjs/toolkit";
import LoaderSlice from "./loaderSlice";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authSlice from "./authSlice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"],
};

const rootReducer = combineReducers({
  loader: LoaderSlice,
  auth: authSlice
});

export const persistedReducer = persistReducer(persistConfig, rootReducer);