import { useDispatch, useSelector } from "react-redux";
import styles from "./Header.module.css";
import { logout, selectCurrentUser } from "../state/authSlice";
import { User } from "../types";
import { AppDispatch } from "../state/store";

function Header() {
  const user: User = useSelector(selectCurrentUser);
  const dispatch: AppDispatch = useDispatch();

  const loggedInContent = function () {
    return (
      <>
        <h2>{user.name}</h2>
        <button type="button" onClick={() => dispatch(logout())}>
          Logout
        </button>
      </>
    );
  };

  return (
    <header className={styles.header}>
      <div>
        <h1>Guess the Number</h1>
        <h2>A simple game to improve math skills</h2>
      </div>
      <div>{user !== null ? loggedInContent() : <h2>Not logged in</h2>}</div>
    </header>
  );
}

export default Header;
