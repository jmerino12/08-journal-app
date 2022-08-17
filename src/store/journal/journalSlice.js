import { createSlice } from "@reduxjs/toolkit";

export const jorunalSlice = createSlice({
  name: "jorunal",
  initialState: {
    isSaving: true,
    messageSaved: "",
    notes: [],
    active: null,
    //actives: [],
    /*active: {
      id: "ABC123",
      title: "",
      body: "",
      date: 1234343,
      imagesUrls: [],
    },*/
  },
  reducers: {
    addNewEmptyNote: (state, action) => {
      state.counter += 1;
    },
    setActiveNote: (state, action) => {},
    setNotes: (state, action) => {},
    setSaving: (state) => {},
    updateNote: (state) => {},
    deleteNoteById: (state) => {},
  },
});

export const {
  addNewEmptyNote,
  setActiveNote,
  setNotes,
  setSaving,
  updateNote,
  deleteNoteById,
} = jorunalSlice.actions;
