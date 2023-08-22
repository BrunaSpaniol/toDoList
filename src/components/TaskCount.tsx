import styles from "./TaskCount.module.css";

interface TaskCountProps {
  content?: "doneTasks" | "default";
  value: number;
}

export function TaskCount({ content="default", value }: TaskCountProps) {
  const title = content !== "default" ? "Concluídas" : "Tarefas criadas";

  return (
    <div className={styles.task}>
      <p className={styles[content]}>{title}</p>
      <span>{value}</span>
    </div>
  );
}
