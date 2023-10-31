import React from "react";
import Home from "./components/home/Home.jsx";
import Navbar from "./components/navbar/Navbar.jsx";
import Products from "./components/shop/Products.jsx";
import Restaurant from "./components/restaurant/Restaurant.jsx";
import ResProducts from "./components/restaurant/ResProducts.jsx";
import ProDetails from "./components/restaurant/ProDetails.jsx";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/products" Component={Products} />
          <Route path="/restaurant" Component={Restaurant} />
          <Route path="/restaurant/product" Component={ResProducts} />
          <Route path="/restaurant/product/details" Component={ProDetails} />
        </Routes>
      </div>
    </>
  );
}

export default App;
