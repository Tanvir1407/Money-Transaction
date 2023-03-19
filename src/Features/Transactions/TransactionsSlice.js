import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { addTransactions, getTransactions } from "./TransactionsAPI"

const initialState = {
    transactions: [],
    isLoading: false,
    isError: false,
    error: ""
}

// async thunks
export const fetchTransactions = createAsyncThunk('transactions/fetchTransactions',  async () => {
    const transactions = await getTransactions()
    return transactions;
})

export const createTransaction = createAsyncThunk('transactions/createTransaction',  async (data) => {
    const transaction = await addTransactions(data)
    return transaction;
})

export const changeTransaction = createAsyncThunk('transactions/changeTransaction',  async ({id, data}) => {
    const transaction = await addTransactions(id,data)
    return transaction;
})
export const removeTransaction = createAsyncThunk('transactions/removeTransaction',  async (id) => {
    const transaction = await addTransactions(id)
    return transaction;
});

// reducers slice

const transactionSlice = createSlice({
    name: "Transactions",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchTransactions.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(fetchTransactions.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.transactions = action.payload;
            })
            .addCase(fetchTransactions.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.transactions = [];
                state.error = action.error?.message;
            })

            //create transactions
            .addCase(createTransaction.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(createTransaction.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.transactions.push(action.payload);
            })
            .addCase(createTransaction.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.error?.message;
            })
            
            // change transactions 
            .addCase(changeTransaction.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(changeTransaction.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                const indexToUpdate = state.transactions.findIndex(t => t.id === action.payload.id)
                state.transactions[indexToUpdate] = action.payload
            })
            .addCase(changeTransaction.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.error?.message;
            })                                                                  

            // remove transactions 
            .addCase(removeTransaction.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(removeTransaction.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.transactions = state.transactions.filter(t=> t.id !== action.payload.id)
            })
            .addCase(removeTransaction.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.error?.message;
            })                                                                  
             
    }

})

export default transactionSlice.reducer; 