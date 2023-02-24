import React from "react";

function GuessList({ guesses = [] }) {
  // using index as key, because changes can't be edited after submit.

  return <div class="guess-results">
    {guesses.map((guess, guessIdx) => <p class="guess" key="guessIdx">{guess}</p>)}
  </div>;
}

export default GuessList;
