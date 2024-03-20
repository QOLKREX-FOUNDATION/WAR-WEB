import { useCallback, useContext, useEffect, useState } from "react";
import { WarContext } from "../../context/WarContext";
import { useTranslation } from "react-i18next";
const lang = { locale: "es-Es" };

export const useSpecie = (type) => {
  const { speciesData, racesData } = useContext(WarContext);
  const { i18n } = useTranslation()

  console.log({ type });
  // console.log({ racesData });

  const [species, setSpecies] = useState([]);
  const [races, setRaces] = useState([]);

  const handleSpecies = useCallback(() => {
    const animals = [];
    for (let i = 0; i < speciesData?.length; i++) {
      animals.push({
        label:
          i18n.language === "es"
            ? speciesData[i]["nameSpanish"]
            : speciesData[i]["nameEnglish"],
        value: speciesData[i]["name"],
      });
    }
    // console.log({ animals });
    return animals;
  }, [speciesData, i18n.language]);

  const handleRaces = useCallback(
    (type) => {
      const races = [];
      const racesFilter = racesData.filter((race) => race.animal === type);
      // console.log(racesFilter);
      try {
        for (let i = 0; i < racesFilter?.length; i++) {
          races.push({
            label:
              i18n.language === "es"
                ? racesFilter[i]["nameSpanish"]
                : racesFilter[i]["nameEnglish"],
            value: racesFilter[i]["name"],
          });
        }
        // console.log({ races });
        return races;
      } catch (error) {
        console.log(error);
        return races;
      }
    },
    [racesData, i18n.language]
  );

  useEffect(() => {
    setSpecies(handleSpecies());
  }, [type, handleSpecies]);

  useEffect(() => {
    setRaces(handleRaces(type));
  }, [type, handleRaces]);

  return {
    species,
    races,
  };
};
