import styles from "../styles/MovieItem.module.scss";
import poster from "../public/test_poster.png";
import Image from "next/image";

type raiting = 1 | 2 | 3 | 4 | 5 | 0;

type props = {
  title: string;
  rating: raiting;
};

function getStarIcons(rating: raiting): JSX.Element[] {
  let stars = [];

  for (let i = 0; i < rating; i++) {
    stars.push(<i className={`bi bi-star-fill`}></i>);
  }

  while (stars.length < 5) {
    stars.push(<i className="bi bi-star"></i>);
  }

  return stars;
}

export default function MovieItem(props: props) {
  return (
    <div className={styles.movie__item}>
      <Image src={poster} className={styles.movie__image} alt="film poster" />
      <h3>{props.title}</h3>
      <span>
        {getStarIcons(props.rating)}
        <b>{`${props.rating}/5`}</b>
      </span>
    </div>
  );
}
