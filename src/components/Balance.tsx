import { useContext } from "react";
import { GlobalState } from "../context/GlobalState";

const Balance = () => {
  const { state } = useContext(GlobalState);
  const total = state.transactions
    .reduce((acc, transaction) => (acc += transaction.amount), 0)
    .toFixed(2);

  return (
    <>
      <h4>Your Balance</h4>
      <h1>${total}</h1>
    </>
  );
};

export default Balance;
