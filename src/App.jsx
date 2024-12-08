import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Services from "./components/Services";
import About from "./components/About";
import Products from "./components/Products";
import Blog from "./components/Blog";
import Newletter from "./components/Newletter";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="">
      <Navbar />
      <Home />
      <Services />
      <About />
      <Products />
      <Blog />
      <Newletter />
      <Footer />
    </div>
  );
}

export default App;
