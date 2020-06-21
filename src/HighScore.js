import React from "react";
import { useRecoilValue } from "recoil";

import { highScore } from "./Selectors";

const HighScore = () => {
  const score = useRecoilValue(highScore);

  return <h2>Score : {score}</h2>;
};

export default HighScore;
