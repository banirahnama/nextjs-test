import styles from "./header.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.logoContainer}>
          <a href="/">
            <h2>My Bank</h2>
          </a>
        </div>
        <div className={styles.topNavigationContainer}>
          <div className={styles.navigationComponents}>
            <a className={styles.navLink} href="#">
              nav1
            </a>
            <a className={styles.navLink} href="#">
              nav2
            </a>
            <a className={styles.navLink} href="#">
              nav3
            </a>
            <a className={styles.navLink} href="#">
              nav4
            </a>
          </div>
          <a href="#" className={`${styles.button} ${styles.navLink}`}>
            Varaa Aika
          </a>
        </div>
      </nav>
    </header>
  );
};
