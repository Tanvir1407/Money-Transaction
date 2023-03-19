import React from "react";
import Tranjection from "./Tranjection";

export default function Tranjectrions() {
  return (
    <>
      <p className="second_heading">Your Transactions:</p>

      <div className="conatiner_of_list_of_transactions">
        <ul>
          <Tranjection/>
        </ul>
      </div>
    </>
  );
}
