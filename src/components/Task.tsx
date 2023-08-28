import { Trash } from "@phosphor-icons/react";
import styles from "./Task.module.css";

interface TaskProps {
  id: string;
  isCheck: boolean;
  message: string;
  handleDelete: (id: string) => void;
  handleDoneTask: (id: string, checked: boolean) => void;
}

export function Task({
  id,
  isCheck,
  message,
  handleDelete,
  handleDoneTask,
}: TaskProps) {
  return (
    <section className={styles.taskContainer}>
      <div className={styles.task}>
        <input
          type="checkbox"
          checked={isCheck}
          onClick={(event) => handleDoneTask(id, event.currentTarget.checked)}
        ></input>

        <p>{message}</p>

        <button className={styles.delete} onClick={() => handleDelete(id)}>
          <Trash size={16} weight="bold" />
        </button>
      </div>
    </section>
  );
}
