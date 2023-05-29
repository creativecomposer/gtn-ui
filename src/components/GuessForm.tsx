import { MutableRefObject, useRef } from "react";
import styles from "./GuessForm.module.css";

type PropsType = {
  onGuess: (guess: number) => void;
  isLoading: boolean;
};

function GuessForm({ onGuess, isLoading }: PropsType) {
  const formRef: MutableRefObject<HTMLFormElement> = useRef(null);

  const handleSubmit = function (e) {
    e.preventDefault();
    if (!isLoading) {
      onGuess(Number.parseInt(formRef.current.userguess.value));
    }
  };

  return (
    <form className={styles.guessForm} onSubmit={handleSubmit} ref={formRef}>
      <label htmlFor="userguess">Your guess</label>
      <input
        className={styles.guessInput}
        type="number"
        min={1}
        max={10000}
        id="userguess"
        name="userguess"
        required
      />
      <input type="submit" value="Check if guess is correct" />
    </form>
  );
}

export default GuessForm;
