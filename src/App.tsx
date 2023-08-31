import { Header } from "./components/Header";
import { CreateTaskBar } from "./components/CreateTaskBar";

import styles from "./App.module.css";

import "./global.css";

import { EmptyTasks } from "./components/EmptyTasks";
import { Task } from "./components/Task";
import { useMemo, useState } from "react";
import { TaskCount } from "./components/TaskCount";

export interface Task {
  id: string;
  isCheck: boolean;
  message: string;
}

interface CounterTask {
  createdTask: number;
  doneTasks: number;
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleDeleteTask(id: string) {
    const filteredtasks = tasks.filter((task) => task.id !== id);

    setTasks(filteredtasks);
  }

  function handleCreateTask(task: Task) {
    setTasks([task, ...tasks]);
  }

  function handleDoneTask(taskId: string, check: boolean) {
    const editTask = tasks.reduce<Task[]>((accum, task) => {
      if (task.id === taskId) {
        const checkedTask = { ...task, isCheck: check };

        check ? [accum.push(checkedTask) ]: accum.unshift(checkedTask);
      } else {
        task.isCheck ? accum.push(task) : accum.unshift(task);
      }

      return accum;
    }, [] as Task[]);

    setTasks(editTask);
  }

  const countTasks = useMemo<CounterTask>(() => {
    const doneTasks = tasks.reduce((accum, task) => {
      if (task.isCheck) {
        accum += 1;
      }

      return accum;
    }, 0);

    const activeTasks = tasks.length - doneTasks;

    return { createdTask: activeTasks, doneTasks };
  }, [tasks]);

  function renderTasks() {
    if (!tasks.length) {
      return <EmptyTasks />;
    }

    return tasks?.map(({ id, isCheck, message }) => {
      return (
        <Task
          key={id}
          isCheck={isCheck}
          message={message}
          id={id}
          handleDelete={handleDeleteTask}
          handleDoneTask={handleDoneTask}
        />
      );
    });
  }

  return (
    <div className={styles.taskPage}>
      <Header />

      <CreateTaskBar handleCreateTask={handleCreateTask} />

      <section>
        <TaskCount
          doneTasks={countTasks?.doneTasks}
          createdTasks={countTasks?.createdTask}
          totalTasks={tasks.length}
        />

        <div>{renderTasks()}</div>
      </section>
    </div>
  );
}

export default App;
