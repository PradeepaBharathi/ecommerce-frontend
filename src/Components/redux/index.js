import { configureStore } from "@reduxjs/toolkit";

import Productreducer from "./Productslice";

const store = configureStore({
    reducer:{
       product:Productreducer,
    }
})

export default store