import Image from "next/image";
import classes from "./our-mission.module.scss";
import Zoom from "react-reveal/Zoom";
import { MainContainer } from "../../";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
import { useRef } from "react";
import { Bounce } from "react-reveal";

export const OurMission = () => {
  const { t } = useTranslation();
  const { locale } = useRouter();
  // const image = useRef(null);
  const handleFlip = (id) => {
    const card = document.getElementById(`card__0${ id }`);
    if (!card) return;
    card.classList.toggle(classes.flipped);
  };

  const handleImage = () => {
    const image = document.getElementById("image");
    console.log("handleImage", image.attributes.src.value);
    image.attributes.srcset.value = "/img/mission/chip_implementation.gif";
  }

  const handleImage2 = () => {
    const image = document.getElementById("image");
    console.log("handleImage2", image.attributes.src.value);
    image.attributes.srcset.value = "/img/mission/chip_implementation.png";
  }

  return (
    <>
      <div className={classes.frametop}></div>
      <section className={classes.mission}>
        <MainContainer>
          <div className={classes.mission__container}>
            <div className={classes.mission__content}>
              <h2 className={classes.mission__contentH1}>{t("Our Mission")}</h2>
              <p>
                {t("It is to identify the animals individually, which is essential for the monitoring of health, management and production. Help assess the conservation status of species and implement appropriate protection and conservation measures.Plan and implement sustainable management of animal populations.")}
              </p>
              <p>
                {t("Implement measures to prevent and control poaching and illegal animal trafficking. Comply with the regulations for the conservation and management of animal species. Contribute with research to improve knowledge about animal species and their ecology.Educate the population about the importance of conserving animal species.")}
              </p>

              <div className={classes.mission__contentImages}>
                {/* <Zoom left cascade> */}
                <div>
                  <div>
                    <Bounce right>
                      {
                        locale === "es" ?
                          <Image
                            src="/img/mission/registro_animales_silvestres.png"
                            layout="responsive"
                            width={700}
                            height={500}
                            alt="image"
                          />
                          :
                          <Image
                            src="/img/mission/en/registro_animales_silvestre_en.png"
                            layout="responsive"
                            width={700}
                            height={500}
                            alt="image"
                          />

                      }
                    </Bounce>
                  </div>
                </div>
                {/* </Zoom> */}
              </div>
            </div>
          </div>

          <div className={classes.mission__container}>
            <div className={classes.mission__content}>
              <h2
                className={classes.mission__contentH2}
              >{t("Chip Implementation")}</h2>
              <div className={classes.mission__contentImages}>
                {/* <Image
                src="/img/mission/chip_55x55.png"
                width={55}
                height={55}
                alt="image"
                className={classes.mission__contentImagesChip}
              /> */}
                <Bounce left>
                  <Image
                    src="/img/mission/chip_implementation.png"
                    layout="responsive"
                    width={700}
                    height={500}
                    alt="image"
                    id="image"
                    onMouseEnter={handleImage}
                    onMouseLeave={handleImage2}
                  />
                </Bounce>
              </div>
              <p>
                {t("The animal undergoes a prior physical examination to ensure that it is in good health and that it is appropriate to receive the chip.The chip is implanted in the animal using a special syringe. The chip is placed under the skin, usually on the neck or back.The chip data, such as the ID number and owner information, is recorded on our blockchain-powered platform on Web3.")}
              </p>
              <p>
                {t("It is verified that the chip can be read correctly with a chip reader (Scanner).The animal continues to be monitored to ensure there are no complications after chip implantation.If there are wrong records, not true to be corrected, the data on our platform of the animal and its owner is updated.")}
              </p>
              <p>
                {
                  t("It is important to note that the implantation of animal identification chips must be carried out by trained personnel and with the necessary precautions to avoid harming the animal or putting its health at risk.")
                }
              </p>
            </div>
          </div>

          <div className={classes.mission__container}>
            <div className={classes.mission__content}>
              <h2
                className={classes.mission__contentH2}
              >{t("Our technology based on")}</h2>
              <div className={classes.mission__contentTecnologies}>
                {/* <Zoom top cascade> */}
                <div>
                  <div id="card__01" onClick={() => handleFlip(1)}>
                    {/* front card */}
                    <div>
                      <Image
                        src="/img/mission/objetives/chip.png"
                        width={70}
                        height={70}
                        alt="image"
                      />
                      <h3>Chip</h3>
                    </div>
                    {/* back card */}
                    <div>
                      <h3>1. Chip</h3>
                      <p>{t("It is a small and thin electronic device, RFID (Radio Frequency Identification) chips that is implanted in the body of an animal and contains a unique identification number, which can be read by a special scanner.")}</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div id="card__02" onClick={() => handleFlip(2)}>
                    <div>

                      <Image
                        src="/img/mission/objetives/blockchain.png"
                        width={70}
                        height={70}
                        alt="image"
                      />
                      <h3>Blockchain</h3>
                    </div>
                    <div>
                      <h3>
                        2. Blockchain
                      </h3>
                      <p>{t("Blockchain is a distributed ledger technology used to keep a secure and immutable record of transactions. Each block contains a series of transactions and a reference to the previous block, creating a chain of blocks.")}</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div id="card__03" onClick={() => handleFlip(3)}>
                    <div>

                      <Image
                        src="/img/mission/objetives/identidad-digital.png"
                        width={70}
                        height={70}
                        alt="image"
                      />
                      <h3>{t("Digital identity")}</h3>
                    </div>
                    <div>
                      <h3>
                        3. {("Digital identity")}
                      </h3>
                      <p>{t("The use of smart contracts for the digital identity of animals can help improve efficiency, transparency and security in the management of animal information.")}</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div id="card__04" onClick={() => handleFlip(4)}>
                    <div>

                      <Image
                        src="/img/mission/objetives/trazabilidad.png"
                        width={70}
                        height={70}
                        alt="image"
                      />
                      <h3>{t("Traceability")}</h3>
                    </div>
                    <div>
                      <h3>
                        4. trazabilidad
                      </h3>
                      <p>{t("The traceability of animals through the use of smart contracts (smart contracts) is an emerging technology that allows tracking and recording information about animals in an automated and secure way.")}</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div id="card__05" onClick={() => handleFlip(5)}>
                    <div>

                      <Image
                        src="/img/mission/objetives/identidad-digital.png"
                        width={70}
                        height={70}
                        alt="image"
                      />
                      <h3>Smart Contract</h3>
                    </div>
                    <div>
                      <h3>
                        5. Smart contracts
                      </h3>
                      <p>{t("They are a form of programming contracts that are executed automatically and autonomously. These contracts are written in programming language and are stored on a blockchain, which allows them to be verified and executed without the intervention of a third party.")}</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div id="card__06" onClick={() => handleFlip(6)}>
                    <div>
                      <Image
                        src="/img/mission/objetives/seguridad.png"
                        width={70}
                        height={70}
                        alt="image"
                      />
                      <h3>{t("Security")}</h3>
                    </div>
                    <div>
                      <h3>
                        6. {t("Security")}
                      </h3>
                      <p>{t("The security of an animal registry with smart contracts is achieved through the use of technologies such as blockchain, which provide an immutable and secure record of information.")}</p>
                    </div>
                  </div>
                </div>
                {/* </Zoom> */}
              </div>
            </div>
          </div>
        </MainContainer>
        {/* <div className={classes.framebottom}></div> */}
      </section>
    </>
  );
};
