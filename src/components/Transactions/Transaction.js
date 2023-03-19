import React from "react";
import Delete from "../../images/delete.svg";
import Edit from "../../images/edit.svg";

export default function Transaction() {
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
}
