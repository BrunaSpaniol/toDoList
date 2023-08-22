import { Header } from "./components/Header";
import { CreateTaskBar } from "./components/CreateTaskBar";

import styles from "./App.module.css";

import "./global.css";
import { TaskCount } from "./components/TaskCount";
// import { EmptyTasks } from "./components/EmptyTasks";
import { Task } from "./components/Task";

function App() {
  return (
    <section className={styles.wrapper}>
      <Header />

      <CreateTaskBar />

      <main className={styles.backgroundColor}>
        <div>
          <TaskCount value={3} />

          <TaskCount content="doneTasks" value={3} />
        </div>

        {/* <EmptyTasks /> */}
        <Task />
      </main>
    </section>
  );
}

export default App;
