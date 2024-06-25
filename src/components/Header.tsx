import styles from "./Header.module.css";
import productsAppLogo from "../assets/products-app-logo.svg";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={productsAppLogo} alt="Products App Logo" />
      <h1>Gerenciados de Produtos</h1>
    </header>
  );
}
