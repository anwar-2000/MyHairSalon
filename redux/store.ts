import { configureStore } from "@reduxjs/toolkit";
import ProfileChoicesReducer from "./features/ProfileChoicesSlice";
import navbarToggleReducer from "./features/NavBarSlice"

export const store = configureStore({
  reducer: {
    ProfileChoicesReducer,
    navbarToggleReducer
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
