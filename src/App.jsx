import { useState } from "react";
import Navbar from "./components/shared/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AllProduct from "./pages/AllProduct";
// import Home from "./pages/home";


function App() {
  return (
    <div className="overflow-hidden">

      <Navbar />

      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/all-product' element={<AllProduct />} />

      </Routes>

    </div>
  );
}

export default App;
