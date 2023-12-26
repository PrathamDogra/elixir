import Header from "components/Header";
import Footer from "components/Footer";
import styles from "./index.module.scss";
import Image from "next/image";
import DownloadIcon from "assets/icons/DownIcon.svg";
import ESRImg from "assets/images/Elixir_7-5.png";
import { clubhouseAmenities } from "../../constants";
import Link from "next/link";

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
          <Link
            href="/assets/Elixir.pdf"
            download
            target="_blank"
            className={styles.downloadBtn}
          >
            <p>DOWNLOAD BROCHHURE</p>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "2px" }}
            >
              <Image src={DownloadIcon} alt="" width={11} height={6} />
              <Image src={DownloadIcon} alt="" width={11} height={6} />
            </div>
          </Link>
        </div>
        <div className={styles.bgImage}></div>
      </div>

      <div className={styles.cardsSection}>
        <div className={styles.heading}>CLUBHOUSE AMENITIES</div>
        <div className={styles.cards}>
          {clubhouseAmenities?.map((item) => {
            return (
              <div className={styles.card}>
                <Image src={item?.icon} alt="" />
                <div className={styles.text}>{item?.text}</div>
              </div>
            );
          })}
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
      <div className={styles.imageSection1}>
        <div className={styles.bgImage1}></div>
        <div className={styles.bgImage2}></div>
        <div className={styles.bgImage3}></div>
        <div className={styles.bgImage4}></div>
      </div>
      <Footer />
    </div>
  );
};

export default Amenities;
