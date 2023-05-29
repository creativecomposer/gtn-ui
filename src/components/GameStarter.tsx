import { useStartGameMutation } from "../state/apiSlice";

function GameStarter() {
  const [startGame, { isError, isLoading }] = useStartGameMutation();

  const onStart = function () {
    startGame(null);
  };

  return (
    <>
      <button
        className="success"
        type="button"
        onClick={onStart}
        disabled={isLoading}
      >
        Start a new game
      </button>
      {isError && (
        <p style={{ color: "red" }}>
          Something went wrong. Could not start game!
        </p>
      )}
    </>
  );
}

export default GameStarter;
