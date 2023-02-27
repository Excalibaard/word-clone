import React from "react";

export const BANNER_VARIANTS = {
  happy: "happy",
  sad: "sad",
  hidden: "hidden",
};

function GameBanner({ resetGame, guessesAmount, answer, variant }) {
  if (variant === "hidden") return <></>;

  return (
    <div className={`banner ${variant}`}>
      <p>
        {variant === "happy" && (
          <>
            <strong>Congratulations!</strong> Got it in
            <strong>
              {" "}
              {guessesAmount} guess{guessesAmount !== 1 && "es"}
            </strong>
            .
          </>
        )}
        {variant === "sad" && (
          <>
            Too bad! The answer was:
            <strong> {answer}</strong>.
          </>
        )}
      </p>
      <button className="banner__playAgain" onClick={resetGame}>
        Play Again
      </button>
    </div>
  );
}

export default GameBanner;
