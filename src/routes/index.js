import React from "react";
import Card from "../components/Card";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "../components/NavBar";

const Rutas = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
      </div>
      <Routes>
        <Route path="/item/:id" element={<Card />} />
        <Route path="/category/:categoryId" element={<Card />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Rutas;

