import React, {
  useState,
  useEffect,
  useRef,
  RefObject,
  Dispatch,
  SetStateAction,
} from "react";
import styles from "../styles/Navbar.module.scss";

function detectOutsideClick(
  ref: RefObject<HTMLDivElement>,
  shouldCheck: boolean,
  setOpen: Dispatch<SetStateAction<boolean>>
) {
  useEffect(() => {
    function handleClick(e: any) {
      if (ref.current && !ref.current.contains(e.target) && shouldCheck) {
        setOpen(false);
        document.body.classList.remove("no-scroll");
      }
    }
    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [ref, shouldCheck]);
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(0);
  const menu = useRef<HTMLDivElement | null>(null);

  detectOutsideClick(menu, open, setOpen);

  let menuStyle: string = open
    ? styles.hamburger__content_open
    : styles.hamburger__content;

  let hamburgerStyle = open ? styles.hamburger_open : styles.hamburger;

  function toggleMenu(): void {
    console.log("click");
    setOpen((prevState) => !prevState);
  }

  useEffect(() => {
    if (open) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [open]);

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
      <i
        className={`${hamburgerStyle} bi ${open ? "bi-x-lg" : "bi-list"}`}
        onClick={toggleMenu}
      ></i>
      <div ref={menu} className={menuStyle}>
        <a className={styles.hamburger__content_open__link} href="">
          {/* <i className=""></i> */}
          Home
        </a>
        <a className={styles.hamburger__content_open__link} href="">
          {/* <i className=""></i> */}
          Bestsellers
        </a>
        <a className={styles.hamburger__content_open__link} href="">
          <i className=""></i>
          New Collection
        </a>
      </div>
      <div className={styles.icons}>
        <i className={`${styles.basket} bi bi-basket`}></i>
        <i className={`${styles.profile_icon} bi bi-person-circle`}></i>
      </div>
    </nav>
  );
}
