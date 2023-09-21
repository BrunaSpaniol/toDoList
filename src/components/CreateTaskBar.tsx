import { PlusCircle } from "@phosphor-icons/react";
import { v4 as uuidv4 } from "uuid";

import styles from "./CreateTaskBar.module.css";
import { Task } from "../App";
import { useState } from "react";

interface CreateTaskBarProps {
  handleCreateTask: (task: Task) => void;
}

export function CreateTaskBar({ handleCreateTask }: CreateTaskBarProps) {
  const [newTask, setNewTask] = useState<string>("");

  function handleInputChange(value: string) {
    const message = value;
    setNewTask(message);
  }

  function onCreateTask(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();

    const createTask = {
      id: uuidv4(),
      isCheck: false,
      message: newTask,
    };

    handleCreateTask(createTask);

    setNewTask("");
  }

  return (
    <section className={styles.background}>
      <form className={styles.wrapper}>
        <input
          placeholder="Adicione uma nova tarefa"
          type="text"
          name="message"
          value={newTask}
          onChange={(event) => handleInputChange(event.target.value)}
        ></input>

        <button
          onClick={(e) => onCreateTask(e)}
          type="submit"
          disabled={!newTask.length}
        >
          Criar
          <PlusCircle size={16} />
        </button>
      </form>
    </section>
  );
}
