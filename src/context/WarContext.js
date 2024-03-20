import { useEffect, useState, createContext } from "react";
import { firuApi } from "../../api/firuApi";

export const WarContext = createContext();

export const WarProvider = ({ children }) => {
  const [colorsData, setColors] = useState([]);
  const [speciesData, setSpecies] = useState([]);
  const [racesData, setRaces] = useState([]);

  useEffect(() => {
    firuApi
      .get(`/animals?limit=100`)
      .then(({ data }) => {
        console.log(data);
        setSpecies(data?.animals);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    firuApi
      .get(`/colors?limit=1000`)
      .then(({ data }) => setColors(data?.colors));
  }, []);

  useEffect(() => {
    firuApi
      .get(`/races?limit=10000`)
      .then(({ data }) => setRaces(data?.races))
      .catch((error) => console.log(error));
  }, []);

  return (
    <WarContext.Provider value={{ colorsData, speciesData, racesData }}>
      {children}
    </WarContext.Provider>
  );
};
