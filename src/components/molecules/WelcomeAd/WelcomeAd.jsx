import { useTranslation } from "react-i18next";
import { MainContainer } from "../../";
import classes from "./welcome-ad.module.scss";

export const WelcomeAd = () => {
  const { t } = useTranslation();
  return (
    <div className={classes.welcome}>
      <MainContainer>
        <div className={classes.welcome__slider}>
          <ul>
            {/* <li>{t("W.A.R. welcomes you")}!</li> */}
            <li>{t("Adopt a vicuna")}!</li>
            <li>{t("Adopt a vicuna")}!</li>
            <li>{t("Adopt a vicuna")}!</li>
            <li>{t("Adopt a vicuna")}!</li>
            <li>{t("Adopt a vicuna")}!</li>
            <li>{t("Adopt a vicuna")}!</li>
            <li>{t("Adopt a vicuna")}!</li>
            <li>{t("Adopt a vicuna")}!</li>
            <li>{t("Adopt a vicuna")}!</li>
          </ul>
        </div>
      </MainContainer>
    </div>
  );
};
