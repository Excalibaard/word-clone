import { NUM_OF_GUESSES_ALLOWED } from "./constants";

export function checkGuess(guess, answer) {
  if (!guess) {
    return null;
  }

  const guessChars = guess.toUpperCase().split("");
  const answerChars = answer.split("");

  return guessChars.map((guessChar, index) => {
    const answerChar = answerChars[index];

    let status;
    if (guessChar === answerChar) {
      status = "correct";
    } else if (answerChars.includes(guessChar)) {
      status = "misplaced";
    } else {
      status = "incorrect";
    }
    return {
      letter: guessChar,
      status,
    };
  });
}

/* Game Status */

export function checkWin(lastGuess) {
  return lastGuess.every((char) => char.status === "correct");
}

export function checkLoss(guesses) {
  return guesses.length >= NUM_OF_GUESSES_ALLOWED;
}

/* Character guesses */

const CHAR_STATUS_PRIORITY = ["correct", "misplaced", "incorrect"];

function getLowestIndex(arr, ...statuses) {
  const lowestIndex = statuses.reduce((lowestIdx, status) => {
    const newIdx = arr.indexOf(status);
    return newIdx < lowestIdx && newIdx !== -1 ? newIdx : lowestIdx;
  }, arr.length);

  return arr[lowestIndex];
}

export function guessedLetters(guesses) {
  const lettersStatusMap = {};

  guesses.forEach((guess) => {
    guess.forEach(({ letter, status }) => {
      if (!lettersStatusMap[letter]) {
        lettersStatusMap[letter] = status;
      } else {
        lettersStatusMap[letter] = getLowestIndex(
          CHAR_STATUS_PRIORITY,
          lettersStatusMap[letter],
          status
        );
      }
    });
  });

  return lettersStatusMap;
}
