import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
  name: 'journal',
  initialState: {
    isSaving: false,
    messageSaved: '',
    notes: [],
    active: null
    // active: {
    //   id: 'ABC123',
    //   title: '',
    //   body: '',
    //   date: 123432,
    //   imageUrls: [], //https://foto1.jpg...
    // }
  },
  reducers: {
    addNewEmptyNote: (state, action) => {
      state.notes.push(action.payload);
      state.isSaving = false;
    },
    savingNewNote: (state) => {
      state.isSaving = true;
    },
    setActiveNote: (state, action) => {
      state.active = action.payload;
    },
    setNotes: (state, action) => {
      state.notes = action.payload;
    },
    setSaving: (state, action) => {
      state.isSaving = true;
      // TODO: mensaje de error...
    },
    updateNote: (state, action) => { // payload: note
      state.isSaving = false;
      state.notes = state.notes.map( note => {
        if (note.id === action.payload.id) {
          return action.payload;
        }
        return note;
      } );

      // Todo: Mostrar mensaje de actualización

    },
    deleteNoteById: (state, action) => {

    },
  }
});

// Action creators are generated for each case reducer function
export const { 
  addNewEmptyNote,
  deleteNoteById,
  savingNewNote,
  setActiveNote,
  setNotes,
  setSaving,
  updateNote,
} = journalSlice.actions;