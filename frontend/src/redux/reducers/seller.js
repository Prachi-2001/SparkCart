import { createReducer } from "@reduxjs/toolkit";

const initialState = {
    isSeller: false,
};

export const sellerReducer = createReducer(initialState, {
    LoadSellerRequest: (state) => {
        state.loading = true;
    },
    LoadSellerSuccess: (state, action) => {
        state.isSeller = true;
        state.loading = false;
        state.seller = action.payload;
    },
    LoadSellerFail: (state, action) => {
        state.isSeller = false;
        state.error = action.payload;
        state.loading = false;
    },
    clearError: (state) => {
        state.error = null;
    },
});
