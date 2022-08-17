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
