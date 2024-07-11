import { useContext } from "react";
import { GlobalState } from "../context/GlobalState";
import Transaction from "./Transaction"; // Create a Transaction component

const TransactionList = () => {
  const { state } = useContext(GlobalState);

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {state.transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </>
  );
};

export default TransactionList;
