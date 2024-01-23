import Image from "next/image";
import styles from "./header.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.logoContainer}>
          <a href="/" className="is-flex is-align-items-center">
            <Image src="/bank-logo.jpg" width="75" height="75" alt="Piggybank Plc logo" />
            <h2 className="is-size-3" style={{ color: "#038197"}}>Piggybank Plc</h2>
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
          <a href="/sca" className={`${styles.button} ${styles.navLink}`}>
            Portal
          </a>
        </div>
      </nav>
    </header>
  );
};
