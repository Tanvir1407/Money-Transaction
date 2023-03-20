import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createTransaction,changeTransaction, editInActive } from "../Features/Transactions/TransactionsSlice";

export default function Form() {
  const dispatch = useDispatch()
  const {transactions, isLoading, isError} = useSelector(state => state.transactions)
  const { editing } = useSelector(state => state.transactions)
  

  let [name, setName] = useState("");
  let [type, setType] = useState("income");
  let [amount, setAmount] = useState("");
  let [editMethod, setEditMethod] = useState(false);

  useEffect(() => {
    const { id, type, name, amount } = editing || {};

    if (id) {
      setEditMethod(true)
      setName(name);
      setAmount(amount);
      setType(type)
    }
    else {
      setEditMethod(false);
      reset();
    }
  },[editing])

  const reset = () => {
    setName("");
    setType("");
    setAmount("");
  }

  const handleToCancel = () => {
    setEditMethod(false);
    dispatch(editInActive())
    reset();
  }
  const handleCreate = (e) => {
    e.preventDefault();
    dispatch(createTransaction({
      name,
      type,
      amount:Number(amount)
    }))
    reset();
  }
  const handleUpdate = (e) => {
    e.preventDefault()
    
    dispatch(changeTransaction({
      id: editing.id,
      data: {
        name: name,
        type: type,
        amount: amount
      }
    }))
    editMethod(false)
    reset();
  }

  return (
    <div className="form">
      <h3>Add new transaction</h3>
    <form onSubmit={editMethod ? handleUpdate : handleCreate}>
      <div className="form-group">
        <label>Name</label>
        <input onChange={(e)=>setName(e.target.value)} type="text" name="name" value={name} placeholder="Enter Title" required/>
      </div>

      <div className="form-group radio">
        <label>Type</label>
        <div className="radio_group">
          <input
            type="radio"
            value="income"
            name="income"
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
        <input required onChange={(e) => setAmount(e.target.value)} type="number" placeholder="300" name="amount" value={amount} />
      </div>

        <button disabled={isLoading} type="submit" className="btn">{editMethod ?" Update Transaction":"Add Transaction" }</button>
    </form>
      {editMethod && <button className="btn cancel_edit" onClick={handleToCancel} >Cancel Edit</button>}
    </div>
  );
}
