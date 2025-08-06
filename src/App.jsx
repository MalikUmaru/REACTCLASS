import React from "react";
import "./App.css";
import ShootGame from "./Components/LearningUseState";
import LittleLemon from "./Components/LittleLemon";
import MealsList from "./Components/MealsList";
import ManageWallet from "./Components/ReducerHook";
import DisplayTodoList from "./Components/TodoList";

const App = () => {
  return (
    <div>
      {/* <ShootGame /> */}
      <LittleLemon />
      <MealsList />
      <ManageWallet />
      <DisplayTodoList />
    </div>
  );
};
// import "./App.css";
// import Navbar from "./Components/Navbar";
// import Home from "./Pages/Home";
// import About from "./Pages/About";
// import Contact from "./Pages/Contact";
// import Services from "./Pages/Services";
// import Account from "./Pages/Account";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Dashboard from "./Components/Dashboard";
// import Display from "./Components/Display";
// import Students from "./Components/Students";
// import EE from "./Components/EE";
// import FormData from "./Components/FormData";

// function App(props) {
//   return (
//     <div>
//       <h1 className="text-danger">React Powered Application</h1>;
//       <Dashboard />
//       <Display year={1997} />
//       <Students name={"Malik"}  age={30} level={100}/>
//       {/* <EE /> */}
//       <FormData />
//     </div>
//   );
// }
// const App = () => {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/services" element={<Services />} />
//         <Route path="/account" element={<Account />} />
//       </Routes>
//     </Router>
//   );
// };
export default App;
