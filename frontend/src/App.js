import './App.css';
import React from "react";
import {Routes,Route} from "react-router-dom";
import Home from "./Components/Home";
import Header from "./Components/Header";
import DashBoard from "./Components/DashBoard";

function App() {
  return (
    <div >
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<DashBoard />} />

      </Routes>
    </div>
  );
}

export default App;
