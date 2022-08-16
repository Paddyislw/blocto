import { configureStore } from "@reduxjs/toolkit";
import { calculatorSlice } from "./Features/CalculatorSlice";
import { chartSlice } from "./Features/ChartSlice";


export const store = configureStore({
    reducer: {
       calculater : calculatorSlice.reducer,
       chart : chartSlice.reducer
    }
})