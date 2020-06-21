import React from "react";
import { useRecoilValue } from "recoil";
import { gameScore } from "./atoms";

const Gems = () => {
  const score = useRecoilValue(gameScore);

  return [...Array(score)].map((n, i) => {
    return (
      <span key={i} style={{ padding: 4 }}>
        💎
      </span>
    );
  });
};

export default Gems;
