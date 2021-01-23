import axios from "axios";
const BASE_URL = "https://www.borabit.com/public/ticker/";
const ETH_API_URL = `${BASE_URL}ETH-KRW`;
const BTC_API_URL = `${BASE_URL}BTC-KRW`;

export const getCoins = async () => {
  const {
    data: { data: btc },
  } = await axios(BTC_API_URL);

  const {
    data: { data: eth },
  } = await axios(ETH_API_URL);

  const coins = [...btc, ...eth];
  return coins;
};
