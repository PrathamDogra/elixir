import Header from "components/Header";
import styles from "./index.module.scss";

const Villas = () => {
  return (
    <div className={styles.container}>
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
    </div>
  );
};

export default Villas;
