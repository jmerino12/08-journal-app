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
      state.messageSaved = "";
    },
    setNotes: (state, { payload }) => {
      state.notes = payload;
    },
    setSaving: (state) => {
      state.isSaving = true;
      state.messageSaved = "";
    },
    updateNote: (state, { payload }) => {
      state.isSaving = false;
      state.notes = state.notes.map((note) => {
        if (note.id === payload.id) {
          return payload;
        }
        return note;
      });
      state.messageSaved = `${payload.title}, actualizada correctamente`;
    },
    setPhotosToActiveNote: (state, action) => {
      state.active.imagesUrls = [...state.active.imagesUrls, ...action.payload];
      state.isSaving = false;
    },
    clearNotesLogout: (state) => {
      state.isSaving = false;
      state.messageSaved = "";
      state.notes = [];
      state.active = null;
    },
    deleteNoteById: (state, { payload }) => {
      state.active = null;
      state.notes = state.notes.filter((note) => note.id !== payload);
    },
  },
});

export const {
  savingNewNote,
  addNewEmptyNote,
  setActiveNote,
  setNotes,
  setSaving,
  updateNote,
  setPhotosToActiveNote,
  deleteNoteById,
  clearNotesLogout,
} = jorunalSlice.actions;
