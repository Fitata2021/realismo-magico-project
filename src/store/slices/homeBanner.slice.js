import { createSlice } from "@reduxjs/toolkit";
import { setIsLoading } from "./isLoading.slice";

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
//   return "https://imagedelivery.net/W9-AoheGofN712tx-fnwKA/1af986f3-8eac-4053-c4ac-89bc3107d500/public"
//     .then(() => dispatch(setHomeBanner()))
//     .finally(() => dispatch(setIsLoading(false)));
// };

export const getBanner = () => async (dispatch) => {
  dispatch(setIsLoading(true));

  try {
    // Simula una carga asíncrona de la imagen (reemplázalo con tu lógica de carga real)
    const imageUrl =
      "https://imagedelivery.net/W9-AoheGofN712tx-fnwKA/1af986f3-8eac-4053-c4ac-89bc3107d500/public";

    // Simula un tiempo de carga
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Reemplaza 1000 con el tiempo de carga real de tu imagen

    dispatch(setHomeBanner(imageUrl));
  } catch (error) {
    // Maneja cualquier error que pueda ocurrir durante la carga
    console.error("Error al cargar la imagen:", error);
  } finally {
    dispatch(setIsLoading(false));
  }
};

export default homeBannerSlice.reducer;
