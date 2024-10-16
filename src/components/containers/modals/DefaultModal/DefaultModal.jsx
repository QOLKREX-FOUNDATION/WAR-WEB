import classes from "./default-modal.module.scss";
import Fade from "react-reveal/Fade";
import Image from "next/image";

export const DefaultModal = ({ children, setOpenModal, width = "30rem" }) => {
  return (
    <div className={classes.modal}>
      <div
        className={classes.modal__background}
        onClick={() => setOpenModal(false)}
      >
      </div>
      <div className={classes.modal__container}>
        <Fade>
          <div className={classes.modal__content} style={{ width }}>
            <Decorate />
            {children}
          </div>
        </Fade>
      </div>
    </div>
  );
};

const Decorate = () => {
  return (
    <div className={classes.modal__contentDecorate}>
      <Image
        src="/img/logo-war.webp"
        layout="responsive"
        width={50}
        height={58}
        alt="renian"
        title="renian"
        style={{ serSelect: 'none' }}
        className="select-none"
      />
    </div>
  );
};
