import {configureStore} from "@reduxjs/toolkit"
import { userReducer } from "./reducers/user";
import { sellerReducer } from "./reducers/seller";

// creating store 
const Store = configureStore({
    reducer: {
        user: userReducer,
        seller: sellerReducer
    }
})

export default Store;