import { useEffect, useState } from "react";
import { API } from "../config";

export const useQuantity = () => {
  const [quantityPets, setQuantityPets] = useState(1);
  const [quantityEntity, setQuantityEntity] = useState(1);
  const [quantityAdopters, setQuantityAdopters] = useState(1);

  const handleQuantityPets = async (e) => {
    try {
      const resp = await fetch(
        `https://firulaix-api-nodejs.vercel.app/api/quantity/pets`
      );
      const data = await resp.json();
      //   console.log(data);
      setQuantityPets(data.quantityPets);
    } catch (error) {
      console.log(error);
    }
  };

  const handleQuantityEntity = async (e) => {
    try {
      const resp = await fetch(
        `https://firulaix-api-nodejs.vercel.app/api/quantity/register-entity`
      );
      const data = await resp.json();
      //   console.log(data);
      setQuantityEntity(data.quantityEntityRegister);
    } catch (error) {
      console.log(error);
    }
  };

  const handleQuantityAdopters = async (e) => {
    try {
      const resp = await fetch(
        `https://firulaix-api-nodejs.vercel.app/api/quantity/adopters`
      );
      const data = await resp.json();
      console.log(data);
      setQuantityAdopters(data.quantityEntityRegister);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleQuantityPets();
    handleQuantityEntity();
    handleQuantityAdopters();
  }, []);

  return {
    quantityPets,
    quantityEntity,
    quantityAdopters,
  };
};
