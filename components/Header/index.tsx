"use client";
import { useState, useEffect } from "react";
import cn from "classnames";
import styles from "./index.module.scss";
import DSRLogo from "assets/images/DSR-logo.png";
import ElixirLogo from "assets/images/ELIXIR.png";
import Link from "next/link";
import { HeaderTabs, email } from "../../constants";
import Image from "next/image";
import MailIcon from "assets/icons/Mail.svg";
import { usePathname } from "next/navigation";

interface IHeader {
  customClass?: string;
}

const Header = ({ customClass = "" }: IHeader) => {
  const [isMobile, setIsMobile] = useState(false);
  const [screenWidth, setScreenWidth] = useState<Number>(0);
  const pathname = usePathname();

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

  return (
    <header className={cn(styles.header, customClass)}>
      <nav className={styles.navbar}>
        <Link href="#" className={styles.navbarLogo}>
          <Image src={DSRLogo} alt="DSR" width={82} height={24} />
          <div className={styles["vertical-line"]}></div>
          <Image src={ElixirLogo} alt="Elixir" width={55} height={20} />
        </Link>
        <ul className={styles.navMenu}>
          {HeaderTabs?.map((tab, index) => {
            return (
              <li className={styles.navItem} key={index}>
                <Link
                  href={tab.url}
                  className={cn(styles.navLink, {
                    [styles.selected]: pathname === tab.url,
                  })}
                >
                  {tab.name}
                </Link>
              </li>
            );
          })}
        </ul>
        <Link href={`mailto:${email}`} className={styles.enquireBtn}>
          <Image src={MailIcon} width={20} height={20} alt="" />
          Enquire now
        </Link>
        <div className={cn(styles.hamburger, { [styles.active]: isMobile })}>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
