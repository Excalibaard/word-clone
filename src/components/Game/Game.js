import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessList from "../GuessList";

import { checkGuess, checkLoss, checkWin } from "../../game-helpers";
import GuessKeyboard from "../GuessKeyboard/GuessKeyboard";
import GameBanner, { BANNER_VARIANTS } from "../GameBanner";

function getNewAnswer() {
  // Generate new answer from words list
  const answer = sample(WORDS);
  // Write to console for easier testing
  console.info(answer);
  return answer;
}

const GAME_STATUSES_TO_BANNER_VARIANTS = {
  win: BANNER_VARIANTS.happy,
  loss: BANNER_VARIANTS.sad,
  playing: BANNER_VARIANTS.hidden,
};

function Game() {
  const [guesses, setGuesses] = useState([]);
  const [answer, setAnswer] = useState(getNewAnswer);
  const [gameStatus, setGameStatus] = useState("playing");

  const addGuess = (guess) => {
    const validatedGuess = checkGuess(guess, answer);
    const newGuesses = [...guesses, validatedGuess];
    setGuesses(newGuesses);

    if (checkWin(validatedGuess)) {
      setGameStatus("win");
    } else if (checkLoss(newGuesses)) {
      setGameStatus("loss");
    }
  };

  const bannerVariant = GAME_STATUSES_TO_BANNER_VARIANTS[gameStatus];

  const resetGame = () => {
    setGuesses([]);
    setAnswer(getNewAnswer());
    setGameStatus("playing");
  };

  return (
    <>
      <GuessList guesses={guesses} />
      <GuessInput addGuess={addGuess} disabled={gameStatus !== "playing"} />
      <GuessKeyboard guesses={guesses} />
      <GameBanner
        resetGame={resetGame}
        guessesAmount={guesses.length}
        answer={answer}
        variant={bannerVariant}
      />
    </>
  );
}

export default Game;
