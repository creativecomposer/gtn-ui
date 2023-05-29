import { MutableRefObject, useRef } from "react";
import { Credentials } from "../types";
import styles from "./AuthForm.module.css";
import PasswordInput from "./PasswordInput";

type PropsType = {
  onLogin: (credentials: Credentials) => void;
  isLoading: boolean;
};

function AuthForm({ onLogin, isLoading }: PropsType) {
  const formRef: MutableRefObject<HTMLFormElement> = useRef(null);

  const handleSubmit = function (e) {
    e.preventDefault();
    onLogin({
      username: formRef.current.username.value,
      password: formRef.current.password.value,
    });
  };

  const handleSignup = function () {
    // TODO: send POST request to signup after API endpoint is ready
  };

  return (
    <form className={styles.authForm} onSubmit={handleSubmit} ref={formRef}>
      <div>
        <label htmlFor="username">User Name</label>
        <input type="email" id="username" name="username" required />
      </div>
      <div>
        <PasswordInput name="password" />
      </div>
      <div className={styles.cta}>
        <input
          type="submit"
          value={isLoading ? "Loading..." : "Submit"}
          disabled={isLoading}
        />
        <button type="button" onClick={handleSignup} disabled>
          Signup
        </button>
      </div>
    </form>
  );
}

export default AuthForm;
