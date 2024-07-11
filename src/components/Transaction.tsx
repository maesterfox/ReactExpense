import React, { useContext } from "react";
import { GlobalState } from "../context/GlobalState";
import { Transaction as TransactionType } from "../context/GlobalState"; // Ensure you have defined this type

type Props = {
  transaction: TransactionType;
};

const Transaction: React.FC<Props> = ({ transaction }) => {
  const { dispatch } = useContext(GlobalState);

  const sign = transaction.amount < 0 ? "-" : "+";

  const handleDelete = () => {
    dispatch({ type: "DELETE_TRANSACTION", payload: transaction.id });
  };

  return (
    <li className={transaction.amount < 0 ? "minus" : "plus"}>
      {transaction.text}{" "}
      <span>
        {sign}${Math.abs(transaction.amount)}
      </span>
      <button onClick={handleDelete} className="delete-btn">
        x
      </button>
    </li>
  );
};

export default Transaction;
