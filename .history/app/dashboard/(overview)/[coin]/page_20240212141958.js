import { fetchCoin } from "@/app/api/data";
import AreaChartBox from "@/app/components/BarChart";
import BarChartBox from "@/app/components/dashboard/BarChart";
import CoinBoxChart from "@/app/components/dashboard/CoinBoxChart";

export default async function Page({ params }) {

  const { coin } = params;
  const coinData = await fetchCoin(coin);

  return (
    <main className="grid grid-cols-1 md:grid-cols-3">
      <div className="border grid grid-cols-1 md:col-span-2 w-full border-blue-500 items-center justify-center">
        <div className="border border-green-400">
          <AreaChartBox coin={coinData} />
        </div>

        <div className="border p-3 gap-4 border-indigo-500 w-full">
          <div className="flex items-center justify-between">
            <CoinBoxChart 
              price={coinData.high_24h}
              high={coinData.high_24h > coinData.low_24h}
            >
                Higest Last 24H
            </CoinBoxChart>

            <CoinBoxChart 
              price={coinData.low_24h}
              high={coinData.high_24h < coinData.low_24h}
            >
                Lowest Last 24H
            </CoinBoxChart>
          </div>

          <div className="w-full">
            <BarChartBox />
          </div>

        </div>
      </div>

      <div className="border border-red-400">
        <h1>Pie chart will go here...</h1>
      </div>

    </main>
  );
}