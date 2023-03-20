import React from "react";
import Edit from "../../images/edit.svg";
import Delete from "../../images/delete.svg";
import { useDispatch } from "react-redux";
import { editActive, removeTransaction } from "../../Features/Transactions/TransactionsSlice";


const Transaction = ({ transaction }) => {
  const { name, type, amount } = transaction;
  const dispatch = useDispatch();

  const handleEdit = () => {
    dispatch(editActive(transaction))
  }
  const handleDelete = () => {
    dispatch(removeTransaction(transaction.id))
  }
  return (
    <li className={`transaction ${type}`}>
      <p>{name}</p>
      <div className="right">
        <p>৳ {amount}</p>
        <button className="link" onClick={handleEdit}>
          <img alt="edit" className="icon" src={Edit} />
        </button>
        <button className="link">
          <img alt="delete" onClick={handleDelete} className="icon" src={Delete} />
        </button>
      </div>
    </li>
  );
};

export default Transaction;
