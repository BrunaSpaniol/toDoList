import styles from "./Header.module.css";

import logoRocket from "../assets/logoRocket.svg";

export function Header() {
  return (
    <header className={styles.headerBackground}>
      <section className={styles.logo}>
        <img src={logoRocket} alt="logo toDo" />

        <h1 className={styles.to}>to</h1>

        <h1 className={styles.do}>do</h1>
      </section>
    </header>
  );
}
