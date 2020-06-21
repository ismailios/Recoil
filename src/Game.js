import React from "react";
import { useRecoilState } from "recoil";
import { gameScore } from "./atoms";

const Game = () => {
  const [score, setScore] = useRecoilState(gameScore);

  const handlerClick = () => {
    setScore(score + 1);
  };

  return (
    <div>
      <button
        onClick={handlerClick}
        style={{
          fontSize: "100px",
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
