import Image from "next/image";
import classes from "../../organisms/Consult/consult.module.scss";

export const Default = () => {
  return (
    <div className={classes.consult__default}>

      <div>
        <Image
          src="/svg/war-logo.svg"
          layout="responsive"
          width={80}
          height={80}
          href="war-logo"
        />
      </div>
    </div>
  );
};
