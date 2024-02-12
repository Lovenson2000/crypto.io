import { fetchCoin } from "@/app/api/data";
import AreaChartBox from "@/app/components/dashboard/AreaChartBox";
import BarChartBox from "@/app/components/dashboard/BarChart";
import CoinBox from "@/app/components/dashboard/CoinBox";
import CoinBox from "@/app/components/dashboard/CoinBoxChart";

export default async function Page({ params }) {

  const { coin } = params;
  const coinData = await fetchCoin(coin);

  return (
    <main className="grid grid-cols-1 md:grid-cols-3 my-6 gap-6">
      <div className="grid grid-cols-1 col-span-2 w-full items-center justify-center gap-8">

        <div className="flex items-center justify-between">
        <CoinBox
            price={coinData.current_price}
            
          >
            Current Price
          </CoinBox>
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

        <div className="border">
          <AreaChartBox coin={coinData} />
        </div>

        <div className="border p-3 w-full flex flex-col gap-4">

          <div className="w-full">
            <BarChartBox />
          </div>

        </div>
      </div>

      <div className="border border-red-400">
        <h1>More Data go here...</h1>
      </div>

    </main>
  );
}
