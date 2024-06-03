import { configureStore } from "@reduxjs/toolkit";
import form from './formSlice'


export const store = configureStore({
    reducer:{
        formFields: form.reducer
    }
})