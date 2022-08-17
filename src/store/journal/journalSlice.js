import { createSlice } from "@reduxjs/toolkit";

export const jorunalSlice = createSlice({
  name: "jorunal",
  initialState: {
    isSaving: false,
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
    savingNewNote: (state, action) => {
      state.isSaving = true;
    },

    addNewEmptyNote: (state, action) => {
      state.notes.push(action.payload);
      state.isSaving = false;
    },
    setActiveNote: (state, action) => {
      state.active = action.payload;
    },
    setNotes: (state, { payload }) => {
      state.notes = payload;
    },
    setSaving: (state) => {},
    updateNote: (state) => {},
    deleteNoteById: (state) => {},
  },
});

export const {
  savingNewNote,
  addNewEmptyNote,
  setActiveNote,
  setNotes,
  setSaving,
  updateNote,
  deleteNoteById,
} = jorunalSlice.actions;
