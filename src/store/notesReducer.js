import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  noteList: [
    {
      id: '1',
      category: 'Active Duty',
      client: 'VIC',
      desc: 'hahahahahahha!'
    }
  ]
}

export const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    saveNewNote: (state, action) => {
    //RTK uses Immer inside, which lets us mutate the existing state with normal JS syntax
    state.noteList.push(action.payload)
    }
  }
})

export const { saveNewNote } = notesSlice.actions

export default notesSlice.reducer
