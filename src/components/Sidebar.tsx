import { NavLink } from "react-router-dom";
import styles from "./Sidebar.module.css";

export function Sidebar() {
  return (
    <aside>
      <ul className={styles.navigation}>
        <li>
          <NavLink to="/admin/products" className={styles.active}>
            Produtos
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin/categories">Categorias</NavLink>
        </li>
      </ul>
    </aside>
  );
}
