import styles from "../styles/MovieItem.module.scss";
import poster from "../public/photo_poster.jpg";
import Image from "next/image";
import { useState } from "react";

type props = {
  title: string;
};

export default function MovieItem(props: props) {
  const [liked, toggleLiked] = useState(false);

  function handleLiked() {
    toggleLiked((prevState) => !prevState);
  }

  return (
    <div className={styles.movie__item}>
      <div className={styles.movie__item__image__wrapper}>
        <Image
          src={poster}
          className={styles.movie__item__image}
          alt="film poster"
        />
      </div>
      <div className={styles.movie__item__text}>
        <h3>{props.title}</h3>
        <i
          onClick={handleLiked}
          className={`${styles.movie__item__heart} bi bi-heart${
            liked ? "-fill" : ""
          }`}
        ></i>
      </div>
    </div>
  );
}
