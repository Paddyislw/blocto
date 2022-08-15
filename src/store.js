import { configureStore } from "@reduxjs/toolkit";
import { calculatorSlice } from "./Features/CalculatorSlice";


export const store = configureStore({
    reducer: calculatorSlice.reducer
})