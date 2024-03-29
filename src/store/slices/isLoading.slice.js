import { createSlice } from "@reduxjs/toolkit";

export const isLoadingSlice = createSlice({
  name: "isLoading",
  initialState: false,
  reducers: {
    setIsLoadingTrue: () => {
      return true;
    },
    setIsLoadingFalse: () => {
      return false;
    },
  },
});

export const { setIsLoadingTrue, setIsLoadingFalse } = isLoadingSlice.actions;
export default isLoadingSlice.reducer;
