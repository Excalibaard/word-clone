import React from "react";
import { range } from "../../utils";
import { NUM_OF_CHARS_ALLOWED } from "../../constants";

function Guess({ value = '' }) {
const chars = Array.from(value);

  return <p className="guess">
    {range(NUM_OF_CHARS_ALLOWED).map((charIdx) => <span className="cell" key={`char-${charIdx}`}>{chars[charIdx] || ''}</span>)}
  </p>;
}

export default Guess;
