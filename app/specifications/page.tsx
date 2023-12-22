import Header from "components/Header";
import styles from "./index.module.scss";

const Specification = () => {
  return (
    <div className={styles.container}>
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
    </div>
  );
};

export default Specification;
