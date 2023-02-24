import React, { useState } from "react";
import {NUM_OF_CHARS_ALLOWED} from "../../constants"

function GuessInput({ addGuess }) {
  const [guess, setGuess] = useState('')

  const handleGuessChange = event => {
    let newGuess = event.target.value;
    newGuess = newGuess.toUpperCase()
    setGuess(newGuess);
  }

  const handleSubmit = event => {
    event.preventDefault();
    addGuess(guess);
    setGuess('');
  }

  const pattern = `\\w{${NUM_OF_CHARS_ALLOWED},${NUM_OF_CHARS_ALLOWED}}`

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input id="guess-input" type="text" value={guess} onChange={handleGuessChange} pattern={pattern} />
    </form>
  );
}

export default GuessInput;
