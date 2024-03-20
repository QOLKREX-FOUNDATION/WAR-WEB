import { useRef } from "react";
import styles from "./contact-head.module.scss";
import Image from "next/image";
import useHover from "@react-hook/hover";
import { MainContainer } from "../../../../";

export const ContactHead = () => {
  const targetDir = useRef(null);
  const targetEmail = useRef(null);
  const targetNumb = useRef(null);

  const hoverDir = useHover(targetDir);
  const hoverEmail = useHover(targetEmail);
  const hoverNumb = useHover(targetNumb);

  return (
    <div className={styles.contact}>
      <MainContainer>
        <div className={styles.contact__container}>
          <div className={styles.contact__info}>
            <div ref={targetDir}>
              <lord-icon
                src="https://cdn.lordicon.com/gwklwoti.json"
                trigger={hoverDir ? "loop" : "none"}
                colors="primary:#ffff,secondary:#fffff"
              ></lord-icon>
              <p>1900 N BAYSHORE DR SUITE 1A #136-1611
                MIAMI, FL 33132</p>
            </div>
            <div ref={targetEmail}>
              <lord-icon
                src="https://cdn.lordicon.com/egpbfgcp.json"
                trigger={hoverEmail ? "loop" : "none"}
                colors="primary:#ffff,secondary:#ffffff"
                style={{ width: "25px", height: "25px" }}
              ></lord-icon>
              <p>pets@worldanimalregistry.org</p>
            </div>
            {/* <div ref={targetNumb}>
              <lord-icon
                src="https://cdn.lordicon.com/iguuenru.json"
                trigger={hoverNumb ? "loop" : "none"}
                colors="primary:#ffffff,secondary:#ffffff"
                style={{ width: "30px", height: "30px" }}
              ></lord-icon>
              <p>(+51) 759-4451</p>
            </div> */}
          </div>
        </div>
      </MainContainer>
    </div>
  );
};
