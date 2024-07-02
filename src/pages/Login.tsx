import { NavLink } from "react-router-dom";
import styles from "./Login.module.css";

export function Login() {
  return (
    <div className={styles.login}>
      <h1>Login</h1>
      <NavLink to="/admin">Efetuar Login</NavLink>
    </div>
  );
}
