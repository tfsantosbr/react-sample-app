import styles from "./Dashboard.module.css";

import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Outlet } from "react-router-dom";

export function Dashboard() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
}
