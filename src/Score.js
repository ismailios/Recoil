import React from "react";
import { useRecoilValue } from "recoil";

import { gameScore } from "./atoms";

const Score = () => {
  const score = useRecoilValue(gameScore);

  return <h2>Score : {score}</h2>;
};

export default Score;
