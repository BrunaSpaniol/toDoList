import { Trash } from "@phosphor-icons/react";
import styles from "./Task.module.css";

export function Task() {
  return (
    <section className={styles.task}>
      <input type="checkbox"></input>
      <p>Aprender Francês</p>

      <button className={styles.delete}>
        <Trash size={16} weight="bold" />
      </button>
    </section>
  );
}
