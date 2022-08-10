import React from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import {BrowserRouter, Routes,Route,Link} from "react-router-dom";

function App() {
  return (
    // BEM
    <BrowserRouter>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/checkout" element={[<Checkout />]} />
          <Route path="/" element={[<Home />]} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
