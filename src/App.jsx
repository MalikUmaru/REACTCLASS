import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Dashboard from "./Components/Dashboard";
import Display from "./Components/Display";
import Students from "./Components/Students";
import EE from "./Components/EE";

function App(props) {
  return (
    <div>
      <h1 className="text-danger">React Powered Application</h1>;
      <Dashboard />
      <Display year={1997} />
      <Students name={"Malik"}  age={30} level={100}/>
      <EE />
    </div>
  );
}

export default App;
