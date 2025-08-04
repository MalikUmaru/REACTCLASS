//import React, {useReducer, useState} from "react";
//const [state, setState] = useState(initialState):- e.g of useState Hook
//const [state, dispatch] = useReducer(reducer, initialState);

import { useReducer, useState } from "react";

const reducer = (state, action) => {
  if (action.type === "deposit") {
    return {money: state.money + 10000};
  }
  if (action.type === "withdraw") {
    return {money: state.money - 10000};
  }
};

const ManageWallet = () => {
  const [state, dispatch] = useReducer(reducer, { money: 100000 });
  return (
    <div>
      <h1>Wallet: {state.money}</h1>
      <button
        style={{
          backgroundColor: "green",
          color: "white",
          border: "none",
          borderRadius: "7px",
          padding: "5px",
          marginRight: "5px",
        }}
        onClick={() => dispatch({ type: "deposit" })}
      >
        Deposit
      </button>

      <button
        style={{
          backgroundColor: "red",
          color: "white",
          border: "none",
          borderRadius: "7px",
          padding: "5px",
          marginLeft: "5px",
        }}
        onClick={() => dispatch({ type: "withdraw" })}
      >
        Withdraw
      </button>
    </div>
  );
};

export default ManageWallet;
