import React from "react";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Home from "./pages/Home";
import Wikipedia from "./pages/Wikipedia";
import { Route, Router, Switch } from "wouter";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/wikipedia">
            <Wikipedia />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
