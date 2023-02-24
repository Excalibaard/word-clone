import React, { useState } from "react";

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

  return (
    <form class="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input id="guess-input" type="text" value={guess} onChange={handleGuessChange} pattern="\w{5,5}" />
    </form>
  );
}

export default GuessInput;
