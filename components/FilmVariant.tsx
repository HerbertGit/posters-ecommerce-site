import styles from "../styles/FilmVariant.module.scss";

type resolution = "S" | "M" | "L";

type props = {
  variant: resolution;
};

export default function FilmVariant(props: props) {
  let price: number;

  switch (props.variant) {
    case "S":
      price = 7;
      break;

    case "M":
      price = 5;
      break;

    case "L":
      price = 4;
      break;
  }

  return (
    <div className={styles.film__variant}>
      <b className={styles.film__variant__resolution}>{props.variant}</b>
      <p className={styles.film__variant__price}>{`$${price}`}</p>
    </div>
  );
}
