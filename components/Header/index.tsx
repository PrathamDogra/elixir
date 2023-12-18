"use client";
import { useState, useEffect } from "react";
import cn from "classnames";
import styles from "./index.module.scss";
import DSRLogo from "assets/images/DSR-Group-Logo-red 1.svg";
import Link from "next/link";
import { HeaderTabs } from "../../constants";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);

  const [screenWidth, setScreenWidth] = useState<Number>(0);

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
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <Link href="#" className={styles.navbarLogo}>
          DSR Logo
        </Link>
        <ul className={styles.navMenu}>
          {HeaderTabs?.map((tab, index) => {
            return (
              <li className={styles.navItem} key={index}>
                <Link href={tab.url} className={styles.navLink}>
                  {tab.name}
                </Link>
              </li>
            );
          })}
        </ul>
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
