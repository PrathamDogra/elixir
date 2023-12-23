import FooterLogo from "assets/images/footer-logo.png";
import styles from "./index.module.scss";
import { FooterInfo } from "../../constants";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <Image src={FooterLogo} alt="Logo" width={227} height={108} />
      <div className={styles.infoContainer}>
        {FooterInfo.map((info, index) => {
          return (
            <div className={styles.info} key={index}>
              <div className={styles.title}>{`${info.title}:`}</div>
              <div className={styles.value}>
                <div className={styles.text}>{info.value}</div>
                {info.number && (
                  <div className={styles.text}>{info.number}</div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Footer;
