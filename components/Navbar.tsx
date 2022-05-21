import { useState } from "react";
import styles from "../styles/Navbar.module.scss";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(0);

  let menuStyle: string = open
    ? styles.hamburger__content_open
    : styles.hamburger__content;

  let hamburgerStyle = open ? styles.hamburger_open : styles.hamburger;

  function toggleMenu(): void {
    console.log("click");
    setOpen((prevState) => !prevState);
  }

  // bi-x-lgM

  return (
    <nav className={styles.navbar}>
      <div className={styles.link_wrapper}>
        <a
          className={
            selected === 0
              ? styles.link_wrapper__link_selected
              : styles.link_wrapper__link
          }
          href=""
        >
          Home
        </a>
        <a
          className={
            selected === 1
              ? styles.link_wrapper__link_selected
              : styles.link_wrapper__link
          }
          href=""
        >
          Bestsellers
        </a>
        <a
          className={
            selected === 2
              ? styles.link_wrapper__link_selected
              : styles.link_wrapper__link
          }
          href=""
        >
          New Collection
        </a>
      </div>
      <div className={styles.icons}>
        <i className={`${styles.basket} bi bi-basket`}></i>
        <i className={`${styles.profile_icon} bi bi-person-circle`}></i>
        <i
          className={`${hamburgerStyle} bi ${open ? "bi-x-lg" : "bi-list"}`}
          onClick={toggleMenu}
        ></i>
      </div>

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
