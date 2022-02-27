import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Index from "./components/layout/Index";
import { GlobalProvider } from "./context";
import Lyrics from "./components/tracks/Lyrics";

function App() {
  return (
    <GlobalProvider>
      <Router>
        <>
          <Navbar />
          <div className="container">
            <Routes>
              <Route exact path="/" element={<Index />} />
              <Route exact path="/lyrics/track/:id" element={<Lyrics />} />
            </Routes>
          </div>
        </>
      </Router>
    </GlobalProvider>
  );
}

export default App;
