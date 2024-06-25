import styles from "./Sidebar.module.css";

export function Sidebar() {
  return (
    <aside>
      <ul className={styles.navigation}>
        <li>
          <a href="#" className={styles.active}>
            Produtos
          </a>
        </li>
        <li>
          <a href="#">Categorias</a>
        </li>
      </ul>
    </aside>
  );
}
