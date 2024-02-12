import CoinBox from "./CoinBoxChart";
import CoinPriceBox from "./CoinPriceBox";

export default function CoinBoxWrapper({ coinData }) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center content-center gap-4">
  
        <CoinPriceBox
          data={coinData.current_price}
        >
          Current Price
        </CoinPriceBox>
  
        <CoinPriceBox
          data={coinData.circulating_supply}
        >
          Supplies
        </CoinPriceBox>
  
        <CoinBox
          price={coinData.high_24h}
          high={coinData.high_24h > coinData.low_24h}
        >
          Higest Last 24H
        </CoinBox>
  
        <CoinBox
          price={coinData.low_24h}
          high={coinData.high_24h < coinData.low_24h}
        >
          Lowest Last 24H
        </CoinBox>
      </div>
    );
  }