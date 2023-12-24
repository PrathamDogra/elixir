import Image from "next/image";
import Header from "components/Header";
import Footer from "components/Footer";
import PlayIcon from "assets/icons/play.svg";
import styles from "./index.module.scss";
import cn from "classnames";

const Villas = () => {
  return (
    <div className={"page-container"}>
      <Header />
      <div className={styles.headingSection}>
        <div className={styles.heading}>Experience elevated urban living</div>
        <div className={styles.subHeading}>
          Immerse yourself in a world of innovation and style with our
          groundbreaking east and west villa plans, where thoughtful design
          takes centre stage. Experience the beauty of larger balconies, open
          sit-out spaces, and terraces, perfectly curated for elevating urban
          living to new heights.
        </div>
      </div>
      <button className={styles.download}>
        DOWNLOAD BROCHHURE
        <Image src={PlayIcon} width={4.5} height={8.5} alt="" />
        <Image src={PlayIcon} width={4.5} height={8.5} alt="" />
      </button>
      <Footer />
    </div>
  );
};

export default Villas;
