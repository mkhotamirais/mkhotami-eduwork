import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isDark: JSON.parse(localStorage.getItem("darkMkhotamiEduwork")) || false,
  openNav: false,
};

const basicSlice = createSlice({
  name: "basic",
  initialState,
  reducers: {
    toggleDark(state) {
      state.isDark = !state.isDark;
      localStorage.setItem("darkMkhotamiEduwork", JSON.stringify(state.isDark));
    },
    removeDark(state) {
      state.isDark = false;
    },
    toggleOpenNav(state) {
      state.openNav = !state.openNav;
    },
    closeOpenNav(state) {
      state.openNav = false;
    },
  },
});

export const { toggleDark, removeDark, toggleOpenNav, closeOpenNav } = basicSlice.actions;

export default basicSlice.reducer;
