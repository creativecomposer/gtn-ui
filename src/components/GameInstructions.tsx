import styles from "./GameInstructions.module.css";

function GameInstructions() {
  return (
    <div className={styles.instructions}>
      <ol>
        <li>Press "Start a new game" to start a new game.</li>
        <li>Enter a guess between 1 and 10000 and submit it.</li>
        <li>The app will tell you if your guess is too low or too high.</li>
        <li>Change your guess and try again.</li>
        <li>The game ends when you correctly guess the number.</li>
      </ol>
    </div>
  );
}

export default GameInstructions;
