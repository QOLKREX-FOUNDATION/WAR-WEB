import { useCallback, useContext, useEffect, useState } from "react";
import { WarContext } from "../../context/WarContext";
import { useTranslation } from "react-i18next";

const lang = { locale: "es-Es" };

export const useColours = () => {
  const [colours, setColours] = useState([]);
  const { colorsData } = useContext(WarContext);
  const { i18n } = useTranslation();

  const handleColours = useCallback(() => {
    const colours = [];
    console.log(colorsData);
    for (let i = 0; i < colorsData?.length; i++) {
      colours.push({
        label:
          i18n.language === "es"
            ? colorsData[i]["nameSpanish"]
            : colorsData[i]["nameEnglish"],
        value: colorsData[i]["name"],
      });
    }
    return colours;
  }, [colorsData, i18n.language]);

  useEffect(() => {
    setColours(handleColours());
  }, [handleColours]);

  return {
    colours,
  };
};
