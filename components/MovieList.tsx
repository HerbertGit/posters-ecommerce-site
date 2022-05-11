import React from "react";
import styles from "../styles/MovieList.module.scss";
import MovieItem from "./MovieItem";

type props = {
  title: String;
};

export default function MovieList(props: props) {
  return (
    <div className={styles.movie__list}>
      <h3 className={styles.movie__list__title}>{props.title}</h3>
      <div className={styles.movie__list__container}>
        <MovieItem title="cool poster" rating={4} />
        <MovieItem title="poster" rating={4} />
        <MovieItem title="poster" rating={4} />
        <MovieItem title="poster" rating={4} />
      </div>
    </div>
  );
}
