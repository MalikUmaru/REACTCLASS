import { useState } from "react";

const LittleLemon = () => {
  const [message, setMessage] = useState("Eat at Little Lemon");

  const clickHandler = () => {
    if (message === "Eat at Little Lemon") {
      setMessage("Drink at Little Lemon");
    } else {
      setMessage("Eat at Little Lemon");
    }
  };

  return (
    <div>
      <h1>Little Lemon Restuarant</h1>
      <button onClick={clickHandler}>{message}</button>
    </div>
  );
};

export default LittleLemon;
