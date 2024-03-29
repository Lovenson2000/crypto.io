import { roundToDecimals } from "@/lib/utils";
import CoinBox from "./CoinBoxChart";
import CoinPriceBox from "./CoinPriceBox";

export default function CoinBoxWrapper({ coinData }) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center content-center gap-4">
  
        <CoinPriceBox
          data={coinData.current_price}
          borderColor="border-indigo-600"
        >
          Current Price
        </CoinPriceBox>
  
        <CoinPriceBox
          data={roundToDecimals(coinData.circulating_supply, 3)}
          borderColor="border-blue-500"
        >
          Supplies
        </CoinPriceBox>
  
        <CoinBox
          price={coinData.high_24h}
          high={coinData.high_24h > coinData.low_24h}
          borderColor="border-teal-500"
        >
          Higest Last 24H
        </CoinBox>
  
        <CoinBox
          price={coinData.low_24h}
          high={coinData.high_24h < coinData.low_24h}
          borderColor="border-red-600"
        >
          Lowest Last 24H
        </CoinBox>
      </div>
    );
  }