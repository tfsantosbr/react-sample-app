import styles from "./Dashboard.module.css";

import { Content } from "./Content";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";

export function Dashboard() {
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
