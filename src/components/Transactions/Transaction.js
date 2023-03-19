import React from "react";
import Edit from "../../images/edit.svg";
import Delete from "../../images/delete.svg";


const Transaction = () => {
  return (
    <li className="transaction income">
      <p>Earned this month</p>
      <div className="right">
        <p>৳ 100</p>
        <button className="link">
          <img alt="edit" className="icon" src={Edit} />
        </button>
        <button className="link">
          <img alt="delete" className="icon" src={Delete} />
        </button>
      </div>
    </li>
  );
};

export default Transaction;
