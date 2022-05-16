import { raiting } from "./types";

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

export { getStarIcons };
