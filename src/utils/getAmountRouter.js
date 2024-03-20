import { CONTRACTS, SWAPABI, SWAPROUTERABI } from "../config/index";
import { TOKENS } from "../config/index";
import { amountBig, amountBigReverse } from "./bigNumber";
import ABICELO from "../config/abi/war/router-ubeswap.json";
import Web3 from "web3";

export const getAmountOutMin = async (web3, token0, token1, amount) => {
  try {
    // console.log(ABICELO);
    const web3 = new Web3(
      "https://celo-mainnet.infura.io/v3/6bbfcbeb9e0d49ae80b539a6daa4fdf6"
    );
    const contract = new web3.eth.Contract(
      ABICELO,
      "0xE3D8bd6Aed4F159bc8000a9cD47CffDb95F96121"
    );
    // const BN = amountBig(amount, TOKENS[token0].decimals);
    // console.log(contract);
    const BN = web3.utils.toWei("1", "ether");
    // console.log(BN);
    // const path = [TOKENS[token0].address, TOKENS[token1].address];
    const path = [
      web3.utils.toChecksumAddress(
        "0x765DE816845861e75A25fCA122bb6898B8B1282a"
      ),
      web3.utils.toChecksumAddress(
        "0x6E8c30f31aF6a5a860aCfDd1d312773cFb280B14"
      ),
    ];
    const response = {
      value: await contract?.methods.getAmountsOut(BN, path).call(),
      // route: {
      //   path,
      //   id: [
      //     "0x765DE816845861e75A25fCA122bb6898B8B1282a",
      //     "0x6E8c30f31aF6a5a860aCfDd1d312773cFb280B14",
      //   ],
      // },
    };
    const value1 = { ...response.value };
    // console.log("getAmountRouter line 41", value1[1]);
    response.value = amountBigReverse(value1[1], 8);
    // console.log("getAmountRouter line 44", amountBigReverse(value1[1], 8));
    response.value = response.value.toFixed(4).toString();
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getAmountsIn = async (web3, token0, token1, amount) => {
  try {
    const contract = new web3.eth.Contract(ABICELO, CONTRACTS.swapRouter);

    const BN = amountBig(amount, TOKENS[token1].decimals);
    const path = [TOKENS[token0].address, TOKENS[token1].address];
    const response = {
      value: await contract?.methods.getAmountsIn(BN, path).call(),
      route: {
        path,
        id: [token0, token1],
      },
    };
    return response;
  } catch (error) {
    console.log(error);
  }
};
