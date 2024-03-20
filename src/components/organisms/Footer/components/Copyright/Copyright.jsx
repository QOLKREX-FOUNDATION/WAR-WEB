import React from "react";
import { useTranslation } from "react-i18next";
import { Slide } from "react-reveal";
import { MainContainer } from "../../../../";
import classes from "./copyright.module.scss";

export const Copyright = () => {
  const { t } = useTranslation();
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className={classes.copyright}>
      <div className={classes.copyright__container}>
        <Slide
          bottom
          delay={100}>
          <p>Copyright &copy;{year} | {t("All rights reserved")}</p>
        </Slide>
        <Slide
          bottom
          delay={200}>
          <p>{t("Design by Qolkrex Foundation")}</p>
        </Slide>
      </div>
    </div>
  );
};
