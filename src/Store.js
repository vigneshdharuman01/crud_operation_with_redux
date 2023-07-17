import { configureStore } from "@reduxjs/toolkit";
import taskReducer from './slices/TaskSlices'

export const store=configureStore({
    reducer:{
        tasks:taskReducer

    }
})