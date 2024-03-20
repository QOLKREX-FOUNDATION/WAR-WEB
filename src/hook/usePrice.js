import { useContext, useEffect, useMemo, useState } from "react";
import { Web3Context } from "../contexts/Web3/Web3Context";
import { getAmountOutMin } from "../utils";

export const usePrice = () => {
  const [price, setPrice] = useState(0);
  const { web3 } = useContext(Web3Context);

  const handleAmount = async () => {
    try {
      const { value } = await getAmountOutMin(web3);
      console.log(value);
      setPrice(value);
    } catch (error) {
      console.error(error);
    }
  };

  useMemo(() => {
    handleAmount();
  }, []);

  return {
    price,
  };
};
