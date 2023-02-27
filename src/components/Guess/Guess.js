import React from "react";
import { range } from "../../utils";
import { NUM_OF_CHARS_ALLOWED } from "../../constants";

function Guess({ value = [] }) {
  return <p className="guess">
    {range(NUM_OF_CHARS_ALLOWED).map((charIdx) => {
      if (value && value.length > 0) {
        return (<span 
          className={`cell ${value[charIdx].status}`} 
          key={`char-${charIdx}`}
        >
          {value[charIdx].letter}
        </span>
        )
      }
      else {
        return (<span 
          className={`cell`} 
          key={`char-${charIdx}`}
        ></span>
        )
      }
    } 
    )}
  </p>;
}

export default Guess;
