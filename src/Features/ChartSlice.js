import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

export const fetchChartData = createAsyncThunk('chart/fetchChartData',async(arg)=>{
    const response = await fetch(`https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=${arg}`);
    const data = response.json()
    return data
}
)

export const chartSlice = createSlice({
    name:'chart',
    initialState:{
        data:[],
        loading:false
    },
    extraReducers:{
        [fetchChartData.pending]:(state,action)=>{
            console.log('Loading for chart')
            state.loading = false
        },
        [fetchChartData.fulfilled]:(state,action)=>{
            console.log('Fulfilled for chart')
            state.loading =true
            state.data = action.payload
        },
        [fetchChartData.rejected]:(state,action)=>{
            console.log('Rejected for chart')
            state.loading = false
        }
    }
})

export const selectLoadChart = (state)=>state.chart.loading
export const selectDataChart = (state)=>state.chart.data