"use client";
import Header from "components/Header";
import Footer from "components/Footer";
import styles from "./index.module.scss";
import { useState } from "react";
import PlusIcon from "assets/icons/Plus-Icon.svg";
import MinusIcon from "assets/icons/Minus-Icon.svg";
import Image from "next/image";
import { SpecificationsList } from "../../constants";
import cn from "classnames";

const Specification = () => {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const handleTitleClick = (index: number) => {
    if (currentIndex === index) {
      setCurrentIndex(null);
    } else {
      setCurrentIndex(index);
    }
  };
  return (
    <div className={"page-container"}>
      <Header />
      <div className={styles.headingSection}>
        <div className={styles.heading}>Specifications</div>
      </div>
      <div className={styles.list}>
        {SpecificationsList.map((spec, index) => {
          return (
            <div className={styles.accordionSection}>
              <div>
                <div
                  className={styles.specTitle}
                  onClick={() => handleTitleClick(index)}
                >
                  {spec.title}
                </div>
                
              </div>
              <div
                className={cn(styles.specValueSection, {
                  [styles.show]: currentIndex === index,
                })}
              >
                <div className={styles["specValueSection_1"]}>
                  {spec.value1}
                </div>
                <div className={styles["specValueSection_2"]}>
                  {spec.value2}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default Specification;
