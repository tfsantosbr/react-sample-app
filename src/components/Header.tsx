import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import productsAppLogo from "../assets/products-app-logo.svg";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={productsAppLogo} alt="Products App Logo" />
      <h1>
        <NavLink to="/admin">Gerenciados de Produtos</NavLink>
      </h1>
    </header>
  );
}
