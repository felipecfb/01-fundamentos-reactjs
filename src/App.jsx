import { Post } from "./Post";
import { Header } from "./components/Header";
import { SideBar } from "./components/Sidebar";

import styles from "./App.module.css";
import "./global.css";

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <SideBar />
        <main>
          <Post
            author="Felipe Bastos"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel sequi voluptates veritatis, ratione laboriosam eligendi accusantium culpa corrupti quasi ullam cum unde suscipit quis, iure, autem odio modi harum repellendus!"
          />
        </main>
      </div>
    </div>
  );
}
