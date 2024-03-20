import Lottie from "react-lottie";
import classes from "./contact.module.scss";
import map from "../../../../public/Json/map.json";
import Bounce from "react-reveal/Bounce";
import { DefaultModal, MainContainer, DefaultButton } from "../../";
import { useModal } from "../../../hook/useModal";
import { useForm } from "react-hook-form";
import { useSendForm } from "../../../hook/useSendForm";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import ReactPlayer from "react-player";
import { useRef, useState } from "react";
import { Rotate } from "react-reveal";
import ReCAPTCHA from "react-google-recaptcha";
import { toast } from "react-toastify";

export const Contact = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const recaptchaRef = useRef(null);
  const { t } = useTranslation()
  const { openModal, setOpenModal } = useModal();

  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm();

  const regexNum = /^[0-9]+/;
  const regexText = /^[a-zA-Z0-9 ]+$/;
  const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  const { dataSubmit } = useSendForm();

  const onSubmit = (data) => {
    const recaptchaValue = recaptchaRef.current.getValue();
    // console.log("verify", recaptchaValue)
    if (!recaptchaValue) {
      toast.error("Por favor complete el captcha", {
        theme: "colored",
      });
      return;
    }
    console.log(data);
    dataSubmit(data, setOpenModal, reset);
  };

  const [play, setPlay] = useState(false);
  const [stylesButton, setStylesButton] = useState({
    background: "auto",
    color: "auto",
    border: "auto",
  });

  const openVideo = () => {
    setPlay(true);
    setStylesButton(null);
  };

  const onReCAPTCHAChange = (captchaCode) => {
    if (!captchaCode) {
      return;
    }
    alert(`Hey, ${ email }`);
    recaptchaRef.current.reset();
  }

  return (
    <>
      {openModal && (
        <DefaultModal setOpenModal={setOpenModal}>
          <h1>{t("Mail sent successfully")}!</h1>
        </DefaultModal>
      )}
      <section className={classes.contact} id="contact">
        <video
          src="/video/contact.mp4"
          autoPlay
          loop
          muted
          className={classes.contact__video}
        ></video>
        <MainContainer>
          <Rotate
            bottom
            left>
            <div className={classes.contact__container}>
              <div className={classes.contact__form}>

                <div>
                  <h1>{t("contact us")}</h1>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                      <span>{t("Name")}:</span>
                      <input
                        type="text"
                        {...register("name", {
                          required: {
                            value: true,
                            message: "Campo requerido",
                          },
                          minLength: { value: 3, message: t("Nombre muy corto") },
                          maxLength: { value: 20, message: t("Nombre muy largo") },
                          pattern: {
                            value: regexText,
                            message: "Formato incorrecto",
                          },
                        })}
                      />
                      {errors.name && <small>{errors.name.message}</small>}
                    </div>

                    <div>
                      <span>{t("Telephone")}:</span>
                      <input
                        type="text"
                        {...register("phone", {
                          required: {
                            value: true,
                            message: "Campo requerido",
                          },
                          minLength: { value: 3, message: t("Nombre muy corto") },
                          maxLength: { value: 20, message: t("Nombre muy largo") },
                          pattern: {
                            value: regexText,
                            message: "Formato incorrecto",
                          },
                        })}
                      />
                      {errors.name && <small>{errors.name.message}</small>}
                    </div>

                    <div>
                      <span>{t("Email")}:</span>
                      <input
                        type="email"
                        {...register("email", {
                          required: {
                            value: true,
                            message: t("Campo requerido"),
                          },
                          pattern: {
                            value: regexEmail,
                            message: t("Formato incorrecto"),
                          },
                        })}
                      />
                      {errors.email && <small>{errors.email.message}</small>}
                    </div>

                    <div className={classes.contact__formTextarea}>
                      <span>{t("Message")}:</span>
                      <textarea
                        cols="80"
                        rows="10"
                        {...register("detail", {
                          required: {
                            value: true,
                            message: t("Campo requerido"),
                          },
                        })}
                      />
                      {errors.detail && <small>{errors.detail.message}</small>}
                    </div>

                    <ReCAPTCHA
                      ref={recaptchaRef}
                      size="normal"
                      sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                      onChange={onReCAPTCHAChange}
                    />

                    <div className={classes.contact__formButton}>
                      <DefaultButton type={"submit"} name={t("send message")} />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </Rotate>
        </MainContainer>
        <div className={classes.framebottom}></div>
      </section>
    </>
  );
};
