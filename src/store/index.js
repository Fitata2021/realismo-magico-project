import { configureStore } from "@reduxjs/toolkit";
import isLoading from "./slices/isLoading.slice";
import homeBanner from "./slices/homeBanner.slice";

export default configureStore({
  reducer: {
    isLoading,
    homeBanner,
  },
});
