import { TETROMINOS } from "./game.constant";

export const getRandomTetromino = () => {
  const randomIndex = Math.floor(Math.random() * TETROMINOS.length);
  return TETROMINOS[randomIndex];
};
