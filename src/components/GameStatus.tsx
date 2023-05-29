type PropsType = {
  guessCount: number;
  status: string;
};

function GameStatus({ guessCount, status }: PropsType) {
  const getStatusText = function () {
    let text = "";

    if (status === "init") {
      text = "Game started";
    } else if (status === "high") {
      text = "Guess is higher than the target";
    } else if (status === "low") {
      text = "Guess is lower than the target";
    } else if (status === "correct") {
      text = "You did it! Great work!!";
    } else {
      text = status === "" ? "Uknown" : status;
    }
    return <p>{text}</p>;
  };
  return (
    <div>
      {getStatusText()}
      <p data-testid="guess-count">Number of guesses: {guessCount}</p>
    </div>
  );
}

export default GameStatus;
