"use client";
import Image from "next/image";
import Header from "components/Header";
import Footer from "components/Footer";
import PlayIcon from "assets/icons/play.svg";
import PlayIconWhite from "assets/icons/play-white.svg";
import styles from "./index.module.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Slider from "react-slick";
import { useRouter } from "next/navigation";
import MasterPlan from "assets/images/masterplan.png";
import AssetImage from "assets/images/Elixir-east-villa.png";
import { EastFacingVllas, WestFacingVillas } from "../../constants";
import Link from "next/link";

const Villas = () => {
  const router = useRouter();
  const settings = {
    dots: true,
    // infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  const handleClickOnVillas = (id: string) => {
    router.push(`/villas/${id}`);
  };

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
      <Link href="/assets/Elixir.pdf" download target="_blank">
        <button className={styles.download}>
          DOWNLOAD BROCHHURE
          <Image src={PlayIcon} width={4.5} height={8.5} alt="" />
          <Image src={PlayIcon} width={4.5} height={8.5} alt="" />
        </button>
      </Link>
      <div className={styles.header}>EAST FACING VILLAS</div>
      <div className={styles.slidesContainer}>
        {EastFacingVllas?.map((villa) => (
          <div className={styles.slide}>
            <div className={styles.text}>{villa.text}</div>
            <button
              type="button"
              className={styles.exploreBtn}
              onClick={() => handleClickOnVillas(villa?.id)}
            >
              explore plans
              <Image src={PlayIconWhite} width={6} height={11} alt="" />
              <Image src={PlayIconWhite} width={6} height={11} alt="" />
            </button>
          </div>
        ))}
      </div>
      <div className={styles.container}>
        <div className={styles.headerWest}>WEST FACING VILLAS</div>
        <div className={styles.slidesContainer}>
          {WestFacingVillas?.map((villa) => (
            <div className={styles.slide}>
              <div className={styles.text}>{villa.text}</div>
              <button
                type="button"
                className={styles.exploreBtn}
                onClick={() => handleClickOnVillas(villa?.id)}
              >
                explore plans
                <Image src={PlayIconWhite} width={6} height={11} alt="" />
                <Image src={PlayIconWhite} width={6} height={11} alt="" />
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.headingSection}>
        <div className={styles.heading}>MASTERPLAN</div>
        <div className={styles.subHeading}>
          Explore our site plan, a playground of possibilities where recreation,
          fitness, leisure, and play seamlessly unite, creating a vibrant
          community hub.
        </div>
      </div>
      <Image src={MasterPlan} width={1232} height={708} alt="map" />
      <Footer />
    </div>
  );
};

export default Villas;
