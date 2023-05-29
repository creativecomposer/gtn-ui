import GameInstructions from "./GameInstructions";
import GuessForm from "./GuessForm";
import styles from "./GameContainer.module.css";
import GameStarter from "./GameStarter";
import { useSelector } from "react-redux";
import { selectCurrentGame } from "../state/gameSlice";
import { useGuessMutation } from "../state/apiSlice";
import GameStatus from "./GameStatus";

function GameContainer() {
  const { id, guessCount, status } = useSelector(selectCurrentGame);
  const [submitGuess, { isLoading }] = useGuessMutation();

  const onGuess = function (guess: number) {
    submitGuess({ id, guess });
  };

  return (
    <article className={styles.gameContainer}>
      <h3 className={styles.title}>
        The goal is to correctly guess the number the app has in mind
      </h3>
      <GameInstructions />
      <GameStarter />
      {id !== null && (
        <>
          <GuessForm onGuess={onGuess} isLoading={isLoading} />
          <GameStatus guessCount={guessCount} status={status} />
        </>
      )}
    </article>
  );
}

export default GameContainer;
