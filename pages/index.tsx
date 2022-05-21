import type { NextPage } from "next";
import Image from "next/image";
import heroImage from "../public/Poster_Hero_img.jpg";
import posterImage from "../public/hero_poster.jpg";
import Layout from "../components/Layout";
import styles from "../styles/index.module.scss";
import MovieList from "../components/MovieList";
import { getStarIcons } from "../utils/functions";
import FilmVariant from "../components/FilmVariant";

const Home: NextPage = () => {
  return (
    <Layout>
      <main>
        <section className={styles.hero}>
          <div className={styles.hero__text}>
            <h1>Still wasting money on subscriptions ?</h1>
            <p>Rent films that you actually will watch. </p>
            <a className={styles.hero__button} href="">
              Sign In
            </a>
          </div>
          <div className={styles.hero__img_container}>
            <Image
              src={heroImage}
              className={styles.hero__img}
              alt="Person sitting on couch watching film"
            />
          </div>
        </section>

        <section className="recentlyAdded">
          <MovieList title="Recently Added" />
        </section>

        <section className={styles.recom}>
          <div className={styles.recom__img}>
            <Image src={posterImage} layout="responsive" />
          </div>
          <div className={styles.recom__text}>
            <span className={styles.recom__text__accent}>
              Today's recomendation
            </span>
            <h2>W Malw i Puszczy</h2>
            <div className={styles.recom__text__stars}>
              <span>{getStarIcons(4)} 4/5</span>
            </div>
            <p className={styles.recom__text__description}>
              This is film description, film is cool you should rent it. What
              are you wainting for. Do it.This is film description, film is cool
              you should rent it. What are you wainting for. Do it.This is film
              description, film is cool you should rent it. What are you
              wainting for.k
            </p>
            <div className={styles.recom__text__variant_wrapper}>
              <FilmVariant variant="S" />
              <FilmVariant variant="M" />
              <FilmVariant variant="L" />
            </div>
          </div>
        </section>

        <section className="recentlyAdded">
          <MovieList title="Recently Added" />
        </section>

        <section className="recentlyAdded">
          <MovieList title="Recently Added" />
        </section>

        <section className="recentlyAdded">
          <MovieList title="Recently Added" />
        </section>
      </main>
    </Layout>
  );
};

export default Home;
