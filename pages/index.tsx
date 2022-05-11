import type { NextPage } from "next";
import Image from "next/image";
import heroImage from "../public/renting_company_hero_img.png";
import Layout from "../components/Layout";
import styles from "../styles/index.module.scss";
import MovieList from "../components/MovieList";

const Home: NextPage = () => {
  return (
    <Layout>
      <>
        <div className={styles.hero}>
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
        </div>

        <section className="recentlyAdded">
          <MovieList title="Recently Added" />
        </section>
      </>
    </Layout>
  );
};

export default Home;
