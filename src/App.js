import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  HashRouter,
} from "react-router-dom";

import NavBar from "./Pages/Home/Navbar";
import Home from "./Pages/Home/HomeScreen";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="*" element={<div>404 Not Found</div>}></Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
