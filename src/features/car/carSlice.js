import { createSlice } from "@reduxjs/toolkit"
// like little slices in container

const initialState = {
    cars: ["Model S", "Model 3", "Model X", "Model Y"]
}

const carSlice = createSlice({
    name: "car",
    // redux always have these two properties
    initialState, //initially start application
    reducers: {}   //functions use to manipulate state
})

export const selectCars = state => state.car.cars; //mapping directly cars 

export default carSlice.reducer
