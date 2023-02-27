import React, { useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import GuessList from '../GuessList';

import { checkGuess } from "../../game-helpers"

function getNewAnswer() {
  // Generate new answer from words list
  const answer = sample(WORDS);
  // Write to console for easier testing
  console.info(answer);
  return answer;
}

function Game() {
  const [guesses, setGuesses] = useState([]);
  const [answer, setAnswer] = useState(getNewAnswer)

  const addGuess = (guess) => {
    const validatedGuess = checkGuess(guess, answer)
    const newGuesses = [ ...guesses, validatedGuess];
    setGuesses(newGuesses);
  }

  const resetGame = () => {
    setGuesses([]);
    setAnswer(getNewAnswer());
  }

  return <>
  <button onClick={resetGame}>Reset</button>
  <GuessList guesses={guesses} />
  <GuessInput addGuess={addGuess}/>
  </>;
}

export default Game;
