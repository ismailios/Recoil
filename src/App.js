import React from "react";
import { RecoilRoot } from "recoil";
import Game from "./Game";
import Score from "./Score";
import Gems from "./Gems";
import HighScore from "./HighScore";
import "./App.css";

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <h1>PAPER CLICK</h1>
        <React.Suspense fallback={<div>Loading ...</div>}>
          <HighScore />
        </React.Suspense>

        <Score />
        <Game />
        <Gems />
      </RecoilRoot>
    </div>
  );
}

export default App;
