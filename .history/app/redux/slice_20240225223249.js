import { createSlice, configureStore } from '@reduxjs/toolkit'

export const balanceSlice = createSlice({
  name: 'balance',
  initialState: { value: 0 },
  reducers: {
    incrementBalance: (state, action) => { state.value += action.payload },
  }
})

export const { incremented } = balanceSlice.actions;

