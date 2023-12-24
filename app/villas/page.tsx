"use client";
import Image from "next/image";
import Header from "components/Header";
import Footer from "components/Footer";
import PlayIcon from "assets/icons/play.svg";
import styles from "./index.module.scss";
import cn from "classnames";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Slider from "react-slick";
import MasterPlan from "assets/images/masterplan.png";
import AssetImage from "assets/images/Elixir-east-villa.png";

const Villas = () => {
  const settings = {
    dots: true,
    // infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
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
      <button className={styles.download}>
        DOWNLOAD BROCHHURE
        <Image src={PlayIcon} width={4.5} height={8.5} alt="" />
        <Image src={PlayIcon} width={4.5} height={8.5} alt="" />
      </button>
      <Slider {...settings} className="slick-slider">
        <div className={styles.slide}>
          <Image src={AssetImage} width={436} height={195} alt="" />
        </div>
      </Slider>
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
