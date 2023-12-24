"use client";
import BackIcon from "assets/icons/Back-Rounded.svg";
import Image from "next/image";
import styles from "./index.module.scss";
import { useRouter } from "next/navigation";
import { VillasPages } from "../../../constants";

interface IParams {
  id: string;
}

interface IVillasProps {
  params: IParams;
}

const VillasComponent = ({ params }: IVillasProps) => {
  const router = useRouter();
  const { id } = params;

  const values = VillasPages(id);

  return (
    <div className="page-container">
      <div className={styles.header}>
        <button
          type="button"
          className={styles.backBtn}
          onClick={() => router.back()}
        >
          <Image src={BackIcon} width={32} height={32} alt="back" />
        </button>
        <div className={styles.headerDescription}>
          <div className={styles.heading}>{values?.name}</div>
          <div className={styles.description}>
            {values?.description?.map((desc) => (
              <div className={styles.desc}>{desc}</div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.imagesSection}>
        {values?.imagesArr?.map(({ image, description, width, height }) => (
          <div className={styles.map}>
            <Image src={image} width={width} height={height} alt="image" />
            <div className={styles.desc}>
              {description?.map((desc) => (
                <div>{desc}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VillasComponent;
