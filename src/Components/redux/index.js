import { configureStore } from "@reduxjs/toolkit";

import Productreducer from "./Productslice";
import cartReducer from './cartProductSlice'
const store = configureStore({
    reducer:{
       product:Productreducer,
       cart:cartReducer
    }
})

export default store