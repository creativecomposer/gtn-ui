import { useState } from "react";
import styles from "./PasswordInput.module.css";

function PasswordInput({ name }: { name: string }) {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <div>
      <label htmlFor="password">Password</label>
      <div className={styles.passwordInput}>
        <input
          type={show ? "text" : "password"}
          id="password"
          name={name}
          required
          minLength={6}
        />
        <button className="warning" type="button" onClick={handleClick}>
          {show ? "Hide" : "Show"}
        </button>
      </div>
    </div>
  );
}

export default PasswordInput;
