import AuthForm from "./AuthForm";
import styles from "./AuthContainer.module.css";
import { Credentials, User } from "../types";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../state/authSlice";
import { Navigate } from "react-router-dom";
import { useLoginMutation } from "../state/apiSlice";

function AuthContainer() {
  const user: User = useSelector(selectCurrentUser);
  const [login, { isError, isLoading }] = useLoginMutation();

  if (user !== null) {
    return <Navigate to="/game" />;
  }

  const onLogin = async function (credentials: Credentials) {
    try {
      await login(credentials).unwrap();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <article className={styles.authContainer}>
      <h3 className={styles.title}>
        You must first log in and then you can play the game
      </h3>
      <AuthForm onLogin={onLogin} isLoading={isLoading} />
      {isError && (
        <p className={styles.error}>
          Login failed. Check your credentials or contact the administrator.
        </p>
      )}
    </article>
  );
}

export default AuthContainer;
