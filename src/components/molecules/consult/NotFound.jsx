import Image from "next/image";
import classes from "../../organisms/Consult/consult.module.scss";
import { useTranslation } from "react-i18next";

export const NotFound = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className={classes.consult__nochip}>
      <div>
        <Image
          src="/img/no-chip.png"
          layout="responsive"
          width={80}
          height={80}
          alt="No chip"
        />
      </div>
      <p>{t("Chip number not found")}</p>
    </div>
  );
};
