"use client";
import Header from "components/Header";
import Image from "next/image";
import Elixir from "assets/images/elixir-home.png";
import HomeImage from "assets/images/home-image-1.jpeg";
import PlayIcon from "assets/icons/play.svg";
import Footer from "components/Footer";
import styles from "./index.module.scss";
import Map from "assets/images/map.png";
import WhatsApp from "assets/icons/WhatsAppIcon.svg";
import RightIcon from "assets/icons/RightArrow.svg";
import cn from "classnames";
import { useRouter } from "next/navigation";

const HomePage = () => {
  const router = useRouter();

  const handleGallaryClick = () => {
    router.push("/gallery");
  };

  return (
    <div className={cn("page-container", styles.container)}>
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
        <button
          type="button"
          className={styles.galaryBtn}
          onClick={handleGallaryClick}
        >
          GALLERY
          <Image src={PlayIcon} width={6} height={10} alt="" />
          <Image src={PlayIcon} width={6} height={10} alt="" />
        </button>
      </div>
      <div className={styles.imagesSection}>
        <div className={styles.leftImage} />
        <div className={styles.rightImage} />
      </div>
      <div className={styles.whatsAppContainer}>
        <button type="button" className={styles.whatsAppBtn}>
          <Image src={WhatsApp} width={40} height={40} alt="" />
        </button>
      </div>
      <div className={styles.exploreSection}>
        <div className={styles.heading}>
          Experience unparalleled living in our exquisitely designed villas.
        </div>
        <div>
          <div>
            <div>
              Ultra luxurious villas where the design seamlessly blends harmony
              and rhythm, transforming our villas into an oasis of tranquility
              and calmness.
            </div>
            <div>Ready to experience the extraordinary?</div>
          </div>
          <div></div>
        </div>
      </div>
      <div className={styles.amnetiesSection}>
        <div className={styles.text}>
          <div className={styles.amnetiesHeader}>
            Unveiling unparalleled comfort
          </div>
          <div className={styles.amnetiesText}>
            Carefully curated amenities for a lifestyle beyond ordinary.
          </div>
        </div>
        <button type="button" className={styles.exploreBtn}>
          Explore amenities
          <Image src={RightIcon} width={20} height={20} alt="" />
        </button>
      </div>
      <div className={styles.ourLocationSection}>
        <div className={styles.ourLocation}>Our location</div>
        <div className={styles.mapImage}></div>
        <button type="button" className={styles.viewBtn}>
          VIEW ON GOOGLE MAPS
          <Image src={PlayIcon} width={6} height={10} alt="" />
          <Image src={PlayIcon} width={6} height={10} alt="" />
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
