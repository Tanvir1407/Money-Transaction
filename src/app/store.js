import { configureStore } from "@reduxjs/toolkit";
import transactionReducers from "../Features/Transactions/TransactionsSlice"

export const store = configureStore({
    reducer: {
        transactions: transactionReducers,
    },
});
