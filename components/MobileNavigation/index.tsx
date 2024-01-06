"use client";
import { useState } from "react";
import styles from "./index.module.scss";
import Image from "next/image";
import Link from "next/link";
import MailIcon from "assets/icons/mail-icon.svg";
import classNames from "classnames";
import { email, MOBILE_NUMBER, MESSAGE } from "../../constants";
import WhatsAppIcon from "assets/icons/whatsapp-icon.svg";
import ExploreIcon from "assets/icons/explore-icon.svg";
// Icons for Explore;
import AmenitiesIcon from "../../public/assets/icons/amenitiesIcon.svg";
import LocationIcon from "../../public/assets/icons/location.svg";
import VillasIcon from "../../public/assets/icons/villasIcon.svg";
import SpecsIcon from "../../public/assets/icons/specifications.svg";
import { useRouter } from "next/navigation";

const MobileNavigation = () => {
  const [openNav, setOpenNav] = useState(false);

  const router = useRouter();

  return (
    <div className={styles.container}>
      <div className={styles.mailContainer}>
        <Link href={`mailto:${email}`}>
          <Image src={MailIcon} alt="" />
        </Link>
        <div>Enquire now</div>
      </div>
      <div
        className={styles.explore}
        onClick={() => setOpenNav((prev) => !prev)}
      >
        <Image src={ExploreIcon} alt="" />
      </div>
      <div className={styles.exploreText}>Explore</div>
      <div className={styles.whatsAppContainer}>
        <Link
          href={`//api.whatsapp.com/send?phone=${MOBILE_NUMBER}&text=${MESSAGE}`}
        >
          <Image src={WhatsAppIcon} alt="" />
        </Link>
        <div>Whatsapp</div>
      </div>
      <div
        className={classNames(styles["circle_1"], { [styles.close]: !openNav })}
        onClick={() => router.push("/villas")}
      >
        <Image src={VillasIcon} width={20} height={20} alt="" />
        <div className={styles.text}>Villas</div>
      </div>
      <div
        className={classNames(styles["circle_2"], { [styles.close]: !openNav })}
        onClick={() => router.push("/specifications")}
      >
        <Image src={SpecsIcon} width={16} height={16} alt="" />
        <div className={styles.text}>Specs</div>
      </div>
      <div
        className={classNames(styles["circle_3"], { [styles.close]: !openNav })}
        onClick={() => router.push("/#location")}
      >
        <Image src={LocationIcon} width={16} height={16} alt="" />
        <div className={styles.text}>Location</div>
      </div>
      <div
        className={classNames(styles["circle_4"], { [styles.close]: !openNav })}
        onClick={() => router.push("/amenities")}
      >
        <Image src={AmenitiesIcon} width={20} height={20} alt="" />
        <div className={styles.text}>Amenities</div>
      </div>
    </div>
  );
};

export default MobileNavigation;
