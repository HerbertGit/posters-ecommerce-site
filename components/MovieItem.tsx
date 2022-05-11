import styles from "../styles/MovieItem.module.scss";
import poster from "../public/test_poster.png";
import Image from "next/image";

type raiting = 1 | 2 | 3 | 4 | 5 | 0;

type props = {
  title: string;
  rating: raiting;
};

export default function MovieItem(props: props) {
  return (
    <div className={styles.movie__item}>
      <Image src={poster} className={styles.movie__image} alt="film poster" />
      <h3>{props.title}</h3>
      <span>
        <i className={`bi bi-star-fill`}></i>
        <i className={`bi bi-star-fill`}></i>
        <i className={`bi bi-star-fill`}></i>
        <i className={`bi bi-star-fill`}></i>
        <i className={`bi bi-star-fill`}></i>
        <b>{`${props.rating}/5`}</b>
      </span>
    </div>
  );
}
