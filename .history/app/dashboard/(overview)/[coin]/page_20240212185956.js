import { fetchCoin } from "@/app/api/data";
import AreaChartBox from "@/app/components/dashboard/AreaChartBox";
import BarChartBox from "@/app/components/dashboard/BarChart";
import CoinBox from "@/app/components/dashboard/CoinBoxChart";
import CoinBoxWrapper from "@/app/components/dashboard/CoinBoxWrapper";
import CoinPriceBox from "@/app/components/dashboard/CoinPriceBox";

export default async function Page({ params }) {

  const { coin } = params;
  const coinData = await fetchCoin(coin);

  return (
    <main className="w-full grid grid-cols-1 my-6 py=3 gap-6">
      <div className="grid grid-cols-1 w-full items-center justify-center gap-8">

        <CoinBoxWrapper coinData={coinData} />

        <div className="flex flex-col md:items-center gap-4">
          <button className="p-2 w-full md:w-60 font-normal text-lg bg-main rounded-md text-white outline-none border-none"> Add to favorites</button>
        </div>

        <div className="gap-12 items-center justify-center">

          <div className="shadow-sm">
            <AreaChartBox coin={coinData} />
          </div>

          <div className="w-full shadow-sm">
            <BarChartBox />
          </div>

        </div>

      </div>

      <div className="flex flex-col md:items-center gap-4">
        <button className="p-2 w-full md:w-60  font-normal text-lg bg-main rounded-md text-white outline-none border-none">
          Simulate trade
        </button>
      </div>

    </main>
  );
}

