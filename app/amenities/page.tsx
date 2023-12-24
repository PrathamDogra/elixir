import Header from "components/Header";
import Footer from "components/Footer";
import styles from "./index.module.scss";
import Image from "next/image";
import ESRImg from "assets/images/Elixir_7-5.png";

const Amenities = () => {
  return (
    <div className={"page-container"}>
      <Header />
      <div className={styles.headingSection}>
        <div className={styles.heading}>
          Discover a sanctuary of wellness, relaxation, and play at our
          clubhouse.
        </div>
        <div className={styles.subHeading}>
          Enjoy health and fitness amenities like a gym, meditation and yoga
          hall. With thoughtful design our clubhouse is a haven crafted to
          elevate every moment and create a rejuvenating experience.
        </div>
      </div>
      <div className={styles.imageSection}>
        <div className={styles.btnContainer}>
          <button className={styles.downloadBtn}>DOWNLOAD BROCHHURE</button>
        </div>
        <div className={styles.bgImage}></div>
      </div>

      <div className={styles.cardsSection}>
        <div className={styles.heading}>CLUBHOUSE AMENITIES</div>
        <div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div className={styles.headingSection}>
        <div className={styles.heading}>
          Explore a world of outdoor recreation in our community, where a
          variety of exquisite sports facilities cater to all ages.
        </div>
        <div className={styles.subHeading}>
          From vibrant play areas for children to meticulously designed spaces
          for adults, our outdoor amenities promise a plethora of activities.
        </div>
      </div>
      <div className={styles.imageSection}>
        <div className={styles.bgImage2}></div>
      </div>
      <Footer />
    </div>
  );
};

export default Amenities;
