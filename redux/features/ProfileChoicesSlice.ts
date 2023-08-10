import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ChoiceState = {
  value: string;
};

const initialState = {
  value: "personal Info",
} as ChoiceState;

export const profileChoices = createSlice({
  name: "profileChoices",
  initialState,
  reducers: {
        changeProfileChoice(state, action: PayloadAction<string>){
            state.value = action.payload;
        }
  },
});

export const {
    changeProfileChoice
} = profileChoices.actions;
export default profileChoices.reducer;
