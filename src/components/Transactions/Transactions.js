import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTransactions } from "../../Features/Transactions/TransactionsSlice";
import Transaction from "./Transaction";

const Transactions = () => {
  const { transactions, isLoading, isError } = useSelector(state => state.transactions)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTransactions())
  },[dispatch])
  let content = null;

  if (isLoading && !isError) {
    content = <p>Loading...</p>
  }
  if (!isLoading && isError) {
    content = <p className="error">Something Error</p>
  }
  if (!isLoading && !isError && transactions.length > 0) {
    content = transactions.map(t => <Transaction key={t.id} transaction={t} />)
  }
  if (!isLoading && !isError && transactions.length === 0) {
    content = <p>Transaction Not Found...</p>
  }

  return (
    <>
      <p className="second_heading">Your Transactions:</p>

      <div className="conatiner_of_list_of_transactions">
        <ul>
          {content}
        </ul>
      </div>
    </>
  );
};

export default Transactions;
