import { createSlice, configureStore } from '@reduxjs/toolkit'

const balanceSlice = createSlice({
  name: 'balance',
  initialState: { value: 0 },
  reducers: {
    increment: state => { state.value += state.payload.action },
  }
})

export const { incremented, decremented } = balanceSlice.actions;

