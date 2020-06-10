import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Register from "./components/Register"
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Footer from "./components/Footer";



function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Footer />
      <Register />
    </div>
  );
}

export default App;
