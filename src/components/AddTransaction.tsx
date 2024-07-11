import React, { useState, useContext } from "react";
import { GlobalState } from "../context/GlobalState";

const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState<number>(0);
  const { dispatch } = useContext(GlobalState);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (text && amount !== undefined) {
      const newTransaction = {
        id: Math.floor(Math.random() * 100000000),
        text,
        amount: Number(amount),
      };

      dispatch({ type: "ADD_TRANSACTION", payload: newTransaction });

      setText("");
      setAmount(0);
    }
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <form id="form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            id="text"
            value={text}
            placeholder="Enter text..."
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            id="amount"
            value={amount}
            placeholder="Enter amount..."
            onChange={(e) => setAmount(Number(e.target.value))}
          />
        </div>
        <button className="btn" type="submit">
          Add transaction
        </button>
      </form>
    </>
  );
};

export default AddTransaction;
