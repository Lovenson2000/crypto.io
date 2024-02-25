import { configureStore } from "@reduxjs/toolkit";
import { balanceSlice } from "./slice";

export const store = configureStore({
    reducer: {
        balance: balanceSlice,
    },
});