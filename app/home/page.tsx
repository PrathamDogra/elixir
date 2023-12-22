import Header from "components/Header";
import Image from "next/image";
import Elixir from "assets/images/elixir-home.png";
import HomeImage from "assets/images/home-image-1.jpeg";
import styles from "./index.module.scss";

const HomePage = () => {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.headingSection}>
        <div className={styles.heading}>
          Experience Contemporary Luxurious Villas
        </div>
        <div className={styles.subHeading}>
          Discover the perfect blend of modern living and serene nature in
          Whitefield.
        </div>
      </div>
      <div className={styles.imagesSection}>
        <div className={styles.leftImage} />
        <div className={styles.rightImage} />
      </div>
    </div>
  );
};

export default HomePage;
