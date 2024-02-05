import { createSlice } from "@reduxjs/toolkit";

export const homeBannerSlice = createSlice({
  name: "homeBanner",
  initialState: "",
  reducers: {
    setHomeBanner: (state, action) => {
      return action.payload;
    },
  },
});
export const { setHomeBanner } = homeBannerSlice.actions;

// export const getBanner = () => (dispatch) => {
//   dispatch(setIsLoading(true));
//   return "hola"
//     .then(() => dispatch(setHomeBanner()))
//     .finally(() => dispatch(setIsLoading(false)));
// };

export default homeBannerSlice.reducer;
