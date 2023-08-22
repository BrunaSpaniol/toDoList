import { PlusCircle } from "@phosphor-icons/react";

import styles from "./CreateTaskBar.module.css";

export function CreateTaskBar() {
  return (
    <div className={styles.wrapper}>
      <input
        placeholder="Adicione uma nova tarefa"
        type="text"
        name="searchTask"
      ></input>
      <button>
        Criar
        <PlusCircle size={16} />
      </button>
    </div>
  );
}
