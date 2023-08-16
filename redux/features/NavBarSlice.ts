import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ChoiceState = {
  value: boolean;
};

const initialState = {
  value: false,
} as ChoiceState;

export const navbarToggle = createSlice({
  name: "navbarToggle",
  initialState,
  reducers: {
        toggleNavbar(state){
            state.value = !state.value;
        }
  },
});

export const {
    toggleNavbar
} = navbarToggle.actions;
export default navbarToggle.reducer;
