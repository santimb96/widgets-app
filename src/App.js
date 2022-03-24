import React from "react";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";

const App = () => {
  return (
    <div className="App">
      <Header/>
      <h1 className="text-success">Widget-app</h1>
      <Footer/>
    </div>
  );
}

export default App;
