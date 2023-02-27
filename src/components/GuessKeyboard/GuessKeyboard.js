import React from "react";
import { KEYBOARD_ROWS } from "../../constants";
import { guessedLetters } from "../../game-helpers";

const ROW_OFFSETS = [0, 25, 75];

function GuessKeyboard({ guesses = [] }) {
  const letterGuessStatus = guessedLetters(guesses);

  return (
    <div className="keyboard">
      {KEYBOARD_ROWS.map((row, rowIdx) => {
        const rowOffset = ROW_OFFSETS[rowIdx] + "%";

        return row.map((char, charIdx) => (
          <span
            key={`${rowIdx}-${char}`}
            className={`keyboard__cell ${letterGuessStatus[char]}`}
            style={{
              gridRow: rowIdx + 1,
              gridColumn: charIdx + 1,
              transform: `translateX(${rowOffset})`,
            }}
          >
            {char}
          </span>
        ));
      })}
    </div>
  );
}

export default GuessKeyboard;
