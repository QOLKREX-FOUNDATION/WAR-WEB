import Image from "next/image";
import { Bounce } from "react-reveal";
import { MainContainer } from "../../";
import classes from "./back.module.scss";

export const Back = () => {
  return (
    <>
      <section className={classes.back}>
        <MainContainer>
          <div className={classes.back__container}>
            <Bounce
              left>
              <div className={classes.back__slider}>
                <div>
                  <div>
                    <div>
                      <Image
                        src="/img/back/image_01.png"
                        layout="responsive"
                        width={50}
                        height={50}
                        alt="image"
                      />
                    </div>
                  </div>

                  <div>
                    <div>
                      <Image
                        src="/img/back/image_02.png"
                        layout="responsive"
                        width={50}
                        height={50}
                        alt="image"
                      />
                    </div>
                  </div>

                  <div>
                    <div>
                      <Image
                        src="/img/back/image_03.png"
                        layout="responsive"
                        width={50}
                        height={50}
                        alt="image"
                      />
                    </div>
                  </div>

                  <div>
                    <div>
                      <Image
                        src="/img/back/image_04.png"
                        layout="responsive"
                        width={50}
                        height={50}
                        alt="image"
                      />
                    </div>
                  </div>

                  <div>
                    <div>
                      <Image
                        src="/img/back/image_05.png"
                        layout="responsive"
                        width={50}
                        height={50}
                        alt="image"
                      />
                    </div>
                  </div>

                  <div>
                    <div>
                      <Image
                        src="/img/back/image_06.png"
                        layout="responsive"
                        width={50}
                        height={50}
                        alt="image"
                      />
                    </div>
                  </div>

                  <div>
                    <div>
                      <Image
                        src="/img/back/image_01.png"
                        layout="responsive"
                        width={50}
                        height={50}
                        alt="image"
                      />
                    </div>
                  </div>

                  <div>
                    <div>
                      <Image
                        src="/img/back/image_02.png"
                        layout="responsive"
                        width={50}
                        height={50}
                        alt="image"
                      />
                    </div>
                  </div>

                  <div>
                    <div>
                      <Image
                        src="/img/back/image_03.png"
                        layout="responsive"
                        width={50}
                        height={50}
                        alt="image"
                      />
                    </div>
                  </div>

                  <div>
                    <div>
                      <Image
                        src="/img/back/image_04.png"
                        layout="responsive"
                        width={50}
                        height={50}
                        alt="image"
                      />
                    </div>
                  </div>

                  <div>
                    <div>
                      <Image
                        src="/img/back/image_05.png"
                        layout="responsive"
                        width={50}
                        height={50}
                        alt="image"
                      />
                    </div>
                  </div>

                  <div>
                    <div>
                      <Image
                        src="/img/back/image_06.png"
                        layout="responsive"
                        width={50}
                        height={50}
                        alt="image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Bounce>
          </div>
        </MainContainer>
      </section>
    </>
  );
};
