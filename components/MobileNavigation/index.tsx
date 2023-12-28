import styles from "./index.module.scss";
import Image from "next/image";
import Link from "next/link";
import MailIcon from "assets/icons/mail-icon.svg";
import { email, phoneNumber } from "../../constants";
import WhatsAppIcon from "assets/icons/whatsapp-icon.svg";
import ExploreIcon from "assets/icons/explore-icon.svg";

const MobileNavigation = () => {
  return (
    <div className={styles.container}>
      <div className={styles.mailContainer}>
        <Link href={`mailto:${email}`}>
          <Image src={MailIcon} alt="" />
        </Link>

        <div>Enquire now</div>
      </div>
      <div className={styles.explore}>
        <Image src={ExploreIcon} alt="" />
      </div>
      <div className={styles.exploreText}>Explore</div>
      <div className={styles.whatsAppContainer}>
        <Link href={`tel:${phoneNumber}`}>
          <Image src={WhatsAppIcon} alt="" />
        </Link>
        <div>Whatsapp</div>
      </div>
    </div>
  );
};

export default MobileNavigation;
