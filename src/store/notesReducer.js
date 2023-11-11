import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  noteList: []
}

export const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    saveNewNote: (state, action) => {
      //RTK uses Immer inside, which lets us mutate the existing state with normal JS syntax
      state.noteList.unshift(action.payload)
    },

    updateNote: (state, action) => {
      const { id, category, client, desc } = action.payload
      // find this note in the list
      const targetNote = state.noteList.find((item) => item.id === id)
      // update that note
      targetNote.category = category
      targetNote.client = client
      targetNote.desc = desc
    },

    deleteNote: (state, action) => {
      const targetId = action.payload
      state.noteList = state.noteList.filter((item) => item.id !== targetId)
    }
  }
})

export const { saveNewNote, updateNote, deleteNote } = notesSlice.actions

export default notesSlice.reducer
