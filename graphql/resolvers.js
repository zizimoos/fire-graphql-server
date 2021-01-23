// import { getCoins } from "./db";
import { getCoins } from "./api";

const resolvers = {
  Query: {
    coins: () => getCoins(),
  },
};

export default resolvers;
