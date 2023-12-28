"use client";
import { useState, useEffect } from "react";
import Header from "components/Header";
import Image from "next/image";
import Link from "next/link";
import PlayIcon from "assets/icons/play.svg";
import Footer from "components/Footer";
import MobileNavigation from "components/MobileNavigation";
import styles from "./index.module.scss";
import Map from "assets/images/map.png";
import WhatsApp from "assets/icons/WhatsAppIcon.svg";
import RightIcon from "assets/icons/RightArrow.svg";
import HomeIcon from "assets/icons/HomeIcon.svg";
import TrainIcon from "assets/icons/TrainIcon.svg";
import cn from "classnames";
import { phoneNumber } from "../constants";
import PlusIcon from "assets/icons/Plus-white.svg";
import { useRouter } from "next/navigation";

const HomePage = () => {
  const router = useRouter();
  const [screenWidth, setScreenWidth] = useState<Number>(0);
  const [showEastFacing, setShowEastFacing] = useState(false);
  const [showWestFacing, setShowWestFacing] = useState(false);

  useEffect(() => {
    const updateScreenWidth = () => {
      if (typeof window !== "undefined") {
        setScreenWidth(window.innerWidth);
      }
    };

    // Initial screen width on mount
    updateScreenWidth();

    // Event listener for screen width changes
    if (typeof window !== "undefined")
      window.addEventListener("resize", updateScreenWidth);

    // Clean up the event listener when the component unmounts
    return () => {
      if (typeof window !== "undefined")
        window.removeEventListener("resize", updateScreenWidth);
    };
  }, []);

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
      {!((screenWidth as number) < 767) && (
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
      )}

      <div className={styles.imagesSection}>
        {(screenWidth as number) < 767 ? (
          <div className={styles.leftImageContainer}>
            <div className={styles.first} />
            <div className={styles.second} />
            <div className={styles.third} />
            <div className={styles.fourth} />
          </div>
        ) : (
          <div className={styles.leftImage} />
        )}

        {(screenWidth as number) < 767 ? (
          <div className={styles.rightImageContainer}>
            <div className={styles.rightImage}></div>
            <div className={styles["rightImageContainer_text"]}>
              <div>
                Discover the perfect blend of modern living and serene nature in
                Whitefield.
              </div>
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
          </div>
        ) : (
          <div className={styles.rightImage}></div>
        )}
      </div>
      {(screenWidth as number) > 767 && (
        <div className={styles.whatsAppContainer}>
          <Link href={`tel:${phoneNumber}`} className={styles.whatsAppBtn}>
            <Image src={WhatsApp} width={36} height={36} alt="" />
          </Link>
        </div>
      )}
      <div className={styles.exploreSection}>
        <div className={styles.heading}>
          Experience unparalleled living in our exquisitely designed villas.
        </div>
        <div className={styles.explore}>
          <div className={styles["explore_1"]}>
            <div className={styles["explore_1_text"]}>
              Ultra luxurious villas where the design seamlessly blends harmony
              and rhythm, transforming our villas into an oasis of tranquility
              and calmness.
            </div>
            <div className={styles["explore_1_greenText"]}>
              Ready to experience the extraordinary?
            </div>
            <button
              type="button"
              className={styles["explore_villas_btn"]}
              onClick={() => router.push("/villas")}
            >
              Explore villas
              <Image src={RightIcon} width={20} height={20} alt="" />
            </button>
          </div>
          <div className={styles["explore_2"]}>
            <div className={styles["villas_1"]}>
              <button
                type="button"
                className={styles.plusBtn}
                onClick={() => setShowEastFacing(true)}
              >
                <Image src={PlusIcon} alt="" />
              </button>
              <div className={styles["villas_text"]}>EAST FACING VILLAS</div>
            </div>
            <div className={styles["villas_2"]}>
              <button
                type="button"
                className={styles.plusBtn}
                onClick={() => setShowWestFacing(true)}
              >
                <Image src={PlusIcon} alt="" />
              </button>
              <div className={styles["villas_text"]}>WEST FACING VILLAS</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.middleSection}>
        <div className={styles["middleSection_1"]}>
          {(screenWidth as number) > 767 ? (
            <Image src={TrainIcon} alt="" />
          ) : (
            <Image src={TrainIcon} alt="" width={75} height={88} />
          )}

          <div className={styles.textSection}>
            <div className={styles["textSection_1"]}>10 MIN DRIVE FROM</div>
            <div className={styles["textSection_2"]}>
              KADUGODI METRO STATION
            </div>
          </div>
        </div>
        <div className={styles["middleSection_2"]}>
          {(screenWidth as number) > 767 ? (
            <Image src={HomeIcon} alt="" />
          ) : (
            <Image src={HomeIcon} alt="" width={83} height={89} />
          )}

          <div className={styles.textSection}>
            <div className={styles["textSection_1"]}>10 MIN DRIVE FROM</div>
            <div className={styles["textSection_2"]}>
              KADUGODI METRO STATION
            </div>
          </div>
        </div>
      </div>
      <div className={styles.playSection}>
        <div className={styles["playSection_1"]}>
          <div className={styles.sectionText}>PLAY ZONE</div>
        </div>
        <div className={styles["playSection_2"]}>
          <div className={styles.sectionText}>RECREATION ZONE</div>
        </div>
        <div className={styles["playSection_3"]}>
          <div className={styles.sectionText}>FITNESS ZONE</div>
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
        <button
          type="button"
          className={styles.exploreBtn}
          onClick={() => router.push("/amenities")}
        >
          Explore amenities
          <Image src={RightIcon} width={20} height={20} alt="" />
        </button>
      </div>
      <div className={styles.ourLocationSection} id="location">
        <div className={styles.ourLocation}>Our location</div>
        <div className={styles.mapImage}></div>
        <Link
          href={"https://maps.app.goo.gl/XVjPCCEVAQWr7Hyo9?g_st=iw"}
          className={styles.viewBtn}
          target="_blank"
        >
          VIEW ON GOOGLE MAPS
          <Image src={PlayIcon} width={6} height={10} alt="" />
          <Image src={PlayIcon} width={6} height={10} alt="" />
        </Link>
      </div>
      <Footer />
      {(screenWidth as number) < 767 && <MobileNavigation />}
    </div>
  );
};

export default HomePage;
