/*
import React from "react";
import { createGlobalStyle } from "styled-components";
import Game from "./components/Game/Game";
const GlobalStyle = createGlobalStyle`
  * {
      margin:0;
      padding:0;
      box-sizing:border-box;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <Game />
    </>
  );
}

export default App;
*/
import React, { Component } from "react";
import "../src/components/css/App.css";
import Header from "./components/Game/Header.js";
import Game from "./components/Game/ga.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Game />
      </div>
    );
  }
}

export default App;
