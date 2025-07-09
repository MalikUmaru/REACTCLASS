import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Dashboard from "./Components/Dashboard";
import Display from "./Components/Display";

function App() {
  return (
  <div>
  <h1 className="text-danger">React Powered Application</h1>;
  <Dashboard/>
  <Display/>
  </div>
    
  )
  
}

export default App;
