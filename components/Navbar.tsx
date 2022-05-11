import React from "react";
import styles from "../styles/Navbar.module.scss";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <i className={`${styles.logo} bi bi-film`}>
        <h2 className={styles.logo__text}>One Night Stand</h2>
      </i>
      <i className={`${styles.basket} bi bi-basket`}></i>
      <i className={`${styles.profile_icon} bi bi-person-circle`}></i>
      <i className={`${styles.hamburger} bi bi-list`}></i>
    </nav>
  );
}
