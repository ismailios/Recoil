import { selector } from "recoil";

import { gameScore } from "./atoms";

export const paperSize = selector({
  key: "paperSize",
  get: ({ get }) => {
    const score = get(gameScore);
    return 100 + score * 5;
  },
});

const fetchHighScore = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(303);
    }, 1000);
  });
};

export const highScore = selector({
  key: "highScore",
  get: async ({ get }) => {
    return await fetchHighScore();
  },
});
