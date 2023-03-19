import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createTransaction } from "../Features/Transactions/TransactionsSlice";

export default function Form() {
  const dispatch = useDispatch()
  const {transactions, isLoading, isError} = useSelector(state => state.transactions)

  const [name, setName] = useState("");
  const [type, setType] = useState("income");
  const [amount, setAmount] = useState("");

  const handleCreate = (e) => {
    e.preventDefault();
    dispatch(createTransaction({
      name,
      type,
      amount:Number(amount)
    }))
    e.target.reset();

  }

  return (
    <div className="form">
      <h3>Add new transaction</h3>
    <form onSubmit={handleCreate}>
      <div className="form-group">
        <label>Name</label>
        <input onChange={(e)=>setName(e.target.value)} type="text" name="name" placeholder="Enter Title" required/>
      </div>

      <div className="form-group radio">
        <label>Type</label>
        <div className="radio_group">
          <input
            type="radio"
            value="income"
            name="income"
            required
            checked={type === "income"}
            onChange ={()=>setType("income")}
          />
          <label>Income</label>
        </div>
        <div className="radio_group">
          <input
            type="radio"
            value="expense"
            name="expense"
            checked={type==="expense"}
            onChange ={()=>setType("expense")}
          />
          <label>Expense</label>
        </div>
      </div>

      <div className="form-group">
        <label>Amount</label>
        <input required onChange={(e) => setAmount(e.target.value)} type="number" placeholder="300" name="amount" />
      </div>

      <button disabled={isLoading} type="submit" className="btn">Add Transaction</button>
    </form>
      <button className="btn cancel_edit">Cancel Edit</button>
    </div>
  );
}
