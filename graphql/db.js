import fetch from "node-fetch";
const ETH_API_URL = "https://www.borabit.com/public/ticker/ETH-KRW";
const BTC_API_URL = "https://www.borabit.com/public/ticker/BTC-KRW";

const getEth = () => {
  const eth = fetch(`${ETH_API_URL}`)
    .then((res) => res.json())
    .then((json) => json.data);
  return eth;
};

const getBtc = () => {
  const btc = fetch(`${BTC_API_URL}`)
    .then((res) => res.json())
    .then((json) => json.data);
  return btc;
};

export const getCoins = async () => {
  const coins = [];
  const eth = await getEth();
  const btc = await getBtc();
  coins.push(...btc, ...eth);
  console.log(coins);
  return coins;
};
