import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ModalsList {
  name: string;
  state: boolean;
}

export interface ModalState {
  modalOpen: boolean;
  modalsList: ModalsList[];
}

const initialState: ModalState = {
  modalOpen: false,
  modalsList: [
    {
      name: "contact-form",
      state: false,
    },
    {
      name: "terms-of-use",
      state: false,
    },
    {
      name: "privacy-policy",
      state: false,
    },
    {
      name: "kyc-aml-policy",
      state: false,
    },
  ],
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    open: (state, action: PayloadAction<string>) => {
      state.modalOpen = true;
      const modalIndex = state.modalsList.findIndex(
        (a) => a.name === action.payload
      );
      state.modalsList[modalIndex].state = true;
    },
    close: (state) => {
      state.modalOpen = false;
      state.modalsList.forEach((a) => (a.state = false));
    },
  },
});

export const { open, close } = modalSlice.actions;

export default modalSlice.reducer;
