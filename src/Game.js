import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { gameScore } from "./atoms";

import { paperSize } from "./Selectors";

const Game = () => {
  const [score, setScore] = useRecoilState(gameScore);

  const size = useRecoilValue(paperSize);

  const handlerClick = () => {
    setScore(score + 1);
  };

  return (
    <div>
      <button
        onClick={handlerClick}
        style={{
          fontSize: size,
          border: 0,
          background: "transparent",
          outline: 0,
        }}
      >
        🧻
      </button>
    </div>
  );
};

export default Game;
