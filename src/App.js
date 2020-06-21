import React from "react";
import { RecoilRoot } from "recoil";
import Game from "./Game";
import Score from "./Score";
import Gems from "./Gems";
import "./App.css";

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <h1>PAPER CLICK</h1>
        <Score />
        <Game />
        <Gems />
      </RecoilRoot>
    </div>
  );
}

export default App;
