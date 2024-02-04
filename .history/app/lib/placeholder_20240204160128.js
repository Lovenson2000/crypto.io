
// Placeholder data

export const bitcoinaData = {
    ath: 69045,
    ath_change_percentage: -37.65733,
    ath_date: "2021-11-10T14:24:11.849Z",
    atl: 67.81,
    atl_change_percentage: 63378.81805,
    atl_date: "2013-07-06T00:00:00.000Z",
    circulating_supply: 19617300,
    current_price: 43006,
    fully_diluted_valuation: 903931386329,
    high_24h: 43361,
    id: "bitcoin",
    image: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1696501400",
    last_updated: "2024-02-03T18:45:44.849Z",
    low_24h: 42802,
    market_cap: 844413961192,
    market_cap_change_24h: 3130066966,
    market_cap_change_percentage_24h: 0.37206,
    market_cap_rank: 1,
    max_supply: 21000000,
    name: "Bitcoin",
    price_change_24h: 154.26,
    price_change_percentage_1h_in_currency: -0.5582275897148493,
    price_change_percentage_1y_in_currency: 82.1112581320606,
    price_change_percentage_7d_in_currency: 2.9540130033084013,
    price_change_percentage_14d_in_currency: 3.359298131562037,
    price_change_percentage_24h: 0.35999,
    price_change_percentage_24h_in_currency: 0.35999184488232133,
    price_change_percentage_30d_in_currency: -2.3842675469240433,
    roi: null,
    sparkline_in_7d: {
      price: [
        41771.82954634803,
        41799.0421398876,
        41938.056881146804,
        42046.97495024336,
        42147.82017410596,
        42127.57080456747,
        42119.61049464309,
        41969.01474640476,
        42096.26849936433,
        42100.19924104035,
        42243.164276481606,
        42718.87312951667,
        42548.75221005666,
        42416.53676285781,
        42383.132497367864,
        42475.10086290655,
        42598.12287558346,
        42606.1501752891,
        42463.622391185,
        42424.05693330369,
        42385.71898087929,
        42272.6852553511,
        42248.82817305251,
        42312.41578389574,
      ]
    },
  };

  const { sparkline_in_7d: { price: bitcoinPrices } } = bitcoinaData;

// Creating a new object with 'pv' property using the extracted prices
const bitcoinDataWithPV = {
  pv: bitcoinPrices,
};
console.log(bitcoinDataWithPV);