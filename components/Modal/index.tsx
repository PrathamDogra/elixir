import React, { ReactNode } from "react";
import ReactDOM from "react-dom";
import styles from "./index.module.scss";
import CrossIcon from "assets/icons/CrossRounded.svg";
import Logo from "assets/images/logo-modal-1.png";
import EmailLogo from "assets/images/email-illustration.svg";
import Image from "next/image";

interface IModal {
  onClose: () => void;
}

const Modal = ({ onClose }: IModal) => {
  const handleCloseClick = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    onClose();
  };

  return ReactDOM.createPortal(
    <div className={styles["modal-overlay"]}>
      <div
        className={styles["modal-wrapper"]}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={handleCloseClick}
          className={styles["btn-container"]}
        >
          <Image src={CrossIcon} alt="" />
        </button>
        <div className={styles["modal-body"]}>
          <div className={styles["images-section"]}>
            <Image src={Logo} alt="" />
            <Image src={EmailLogo} alt="" />
            <div className={styles["text"]}>Get in touch!</div>
          </div>
          <div></div>
        </div>
      </div>
    </div>,
    document.getElementById("modal-root")!
  );
};

export default Modal;
