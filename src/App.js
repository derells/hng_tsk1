import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

//webpage import
import Home from "./web_pages/Home";
// import Footer from "./web_pages/Footer";

class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route exact={true} path="/" element={<Home />}>
            render ={(props) => <Home />}
          </Route>
        </Routes>
      </Router>
    );
  }
}

export default App;
