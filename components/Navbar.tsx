import { useState } from "react";
import styles from "../styles/Navbar.module.scss";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  let menuStyle: string = open
    ? styles.hamburger__content_open
    : styles.hamburger__content;

  let hamburgerStyle = open ? styles.hamburger_open : styles.hamburger;

  function toggleMenu(): void {
    console.log("click");
    setOpen((prevState) => !prevState);
  }

  // bi-x-lg

  return (
    <nav className={styles.navbar}>
      <i className={`${styles.logo} bi bi-film`}>
        <h2 className={open ? styles.logo__text_open : styles.logo__text}>
          One Night Stand
        </h2>
      </i>
      <i className={`${styles.basket} bi bi-basket`}></i>
      <i className={`${styles.profile_icon} bi bi-person-circle`}></i>
      <i
        className={`${hamburgerStyle} bi ${open ? "bi-x-lg" : "bi-list"}`}
        onClick={toggleMenu}
      ></i>

      <div className={menuStyle}>
        <a href="">
          <i className=""></i>
        </a>
        <a href="">
          <i className=""></i>
        </a>
        <a href="">
          <i className=""></i>
        </a>
      </div>
    </nav>
  );
}
