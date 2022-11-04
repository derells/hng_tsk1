import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

//webpage import
import Home from "./web_pages/Home";
import Contact from "./web_pages/Contact";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="body">
          <Routes>
            <Route path="/hng_tsk1" element={<Home />} render={<Home />} />
            <Route path="/contact" element={<Contact />} render={<Contact />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
