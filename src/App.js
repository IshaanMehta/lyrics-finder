import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Index from "./components/layout/Index";

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <div className="container">
          <Routes>
            <Route exact path="/" element={<Index />} />
          </Routes>
        </div>
      </>
    </Router>
  );
}

export default App;
