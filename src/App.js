import React from "react";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import { Router } from "wouter";
import Routes from "./components/common/Routes";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes />
        <Footer />
      </Router>
    </div>
  );
};

export default App;
