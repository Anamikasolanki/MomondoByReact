import React from "react";
import Home from "./components/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hotel from "./components/Hotel/Hotel";
import CarHire from "./components/CarHire/CarHire";
import Trip from "./components/Trip/Trip";
import Inspiration from "./components/Inspiration/Inspiration";
import Login from "./components/Login/Login";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hotel" element={<Hotel />} />
          <Route path="/carhire" element={<CarHire />} />
          <Route path="/trip" element={<Trip />} />
          <Route path="/inspiration" element={<Inspiration />} />
          <Route path="/login" element={<Login/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
