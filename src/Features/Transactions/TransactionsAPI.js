import axios from "../../utilitis/axios"


export const getTransactions = async () => {
    const response = await axios.get("/transactions")
    return response.data;
}
export const addTransactions = async (data) => {
    const response = await axios.post("/transactions", data)
    return response.data;
}
export const updateTransactions = async({id , data}) => {
    console.log(id)
    const response = await axios.put(`/transactions/${id}`,data)
    return response.data;
}
export const deleteTransactions = async (id) => {
    const response = await axios.delete(`/transactions/${id}`)
    return response.data;
}
