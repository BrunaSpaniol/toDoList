import styles from "./TaskCount.module.css";

interface TaskCountProps {
  doneTasks: number;
  createdTasks: number;
  totalTasks: number;
}

export function TaskCount({
  doneTasks,
  createdTasks,
  totalTasks,
}: TaskCountProps) {
  return (
    <section className={styles.taskCounterWrapper}>
      <div className={styles.createdTasks}>
        <p>Tarefas criadas</p>

        <span>{createdTasks}</span>
      </div>

      <div className={styles.doneTasks}>
        <p>Concluídas</p>

        <span>
          {doneTasks} de {totalTasks}
        </span>
      </div>
    </section>
  );
}
