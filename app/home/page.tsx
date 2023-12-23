import Header from "components/Header";
import Image from "next/image";
import Elixir from "assets/images/elixir-home.png";
import HomeImage from "assets/images/home-image-1.jpeg";
import PlayIcon from "assets/icons/play.svg";
import Footer from "components/Footer";
import styles from "./index.module.scss";
import Map from "assets/images/map.png";

const HomePage = () => {
  return (
    <div className={"page-container"}>
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
      <div className={styles.gallaryCTA}>
        <button type="button" className={styles.galaryBtn}>
          GALLERY
          <Image src={PlayIcon} width={4.5} height={8.5} alt="" />
          <Image src={PlayIcon} width={4.5} height={8.5} alt="" />
        </button>
      </div>
      <div className={styles.imagesSection}>
        <div className={styles.leftImage} />
        <div className={styles.rightImage} />
      </div>
      <div className={styles.ourLocationSection}>
        <div className={styles.ourLocation}>Our location</div>
        <div className={styles.mapImage}></div>
        <button type="button" className={styles.viewBtn}>
          VIEW ON GOOGLE MAPS
          <Image src={PlayIcon} width={4} height={8} alt="" />
          <Image src={PlayIcon} width={4} height={8} alt="" />
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
