import React from "react";
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'; 

// import pages
import Home from "./pages/Home";

// import components
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="pages">
        <Routes>

          <Route
          path="/"
          element={<Home />}
          />

        </Routes>
      </div>

    </BrowserRouter>
  );
}

export default App;
