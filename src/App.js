import React, { Component } from "react";
import "./App.css";

import Header from "./Header";
import Main from "./Main";
import About from "./About";
import Footer from "./Footer"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
        <About />
        <Footer />
      </div>
    );
  }
}

export default App;
