import React from "react";
import Guess from "../Guess/Guess";
import { range } from "../../utils";
import {NUM_OF_GUESSES_ALLOWED} from "../../constants"

function GuessList({ guesses = [] }) {
  // using index as key, because changes can't be edited after submit.

  return <div className="guess-results">
    {range(NUM_OF_GUESSES_ALLOWED).map((guessIdx) => <Guess key={`result-${guessIdx}`} value={guesses[guessIdx]} />)}
  </div>;
}

export default GuessList;
