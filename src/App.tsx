import "./assets/global.css";
import styles from "./App.module.css";

import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Content } from "./components/Content";

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <Content />
      </div>
    </>
  );
}
