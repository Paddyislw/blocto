import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

export const fetchDataForCalculator = createAsyncThunk('calculater/fetchCalculatorData',async(arg)=>{
    const {currency,value} = arg
    const response = await fetch (`https://blockchain.info/tobtc?currency=${currency}&value=${value}`);
    const data = response.json()
    return data
})

export const calculatorSlice = createSlice({
    name:'calculater',
    initialState:{
        val:0,
        loading:false
    },
    extraReducers:{
        [fetchDataForCalculator.pending]:(state,action)=>{
            state.loading = false
            console.log('LOADING')
        },
        [fetchDataForCalculator.fulfilled]:(state,action)=>{
            state.loading = true
            state.val=action.payload
        },
        [fetchDataForCalculator.rejected]:(state,action)=>{
            state.loading = false
            console.log('REJECTED')
        }
    }
})

export const selectval = (state)=>state.calculater.val
export const selectloading = (state)=>state.calculater.loading