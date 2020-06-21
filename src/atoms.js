import { atom, useRecoilState } from "recoil";

export const gameScore = atom({
  key: "gameScore",
  default: 0,
});

export const UseResetScore = () => {
  const [score, setScore] = useRecoilState(gameScore);
  return () => {
    setScore(0);
  };
};
