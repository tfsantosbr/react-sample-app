import "./assets/global.css";
import { Header } from "./components/Header";
import styles from "./App.module.css";

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <aside>Menu</aside>
        <main>main</main>
      </div>
    </>
  );
}
