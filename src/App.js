import React from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import {BrowserRouter, Routes,Route,Link} from "react-router-dom";
import Login from "./Login"

function App() {
  return (
    // BEM
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/checkout" element={[<Header />,<Checkout />]} />
          <Route path="/" element={[<Header />,<Home />]} />
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
