import { fetchCoin } from "@/app/api/data";
import AreaChartBox from "@/app/components/dashboard/AreaChartBox";
import BarChartBox from "@/app/components/dashboard/BarChart";
import CoinBox from "@/app/components/dashboard/CoinBoxChart";
import CoinPriceBox from "@/app/components/dashboard/CoinPriceBox";

export default async function Page({ params }) {

  const { coin } = params;
  const coinData = await fetchCoin(coin);

  return (
    <main className="grid grid-cols-1 md:grid-cols-3 my-6 gap-6">
      <div className="grid grid-cols-1 col-span-2 w-full items-center justify-center gap-8">

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center content-center gap-4">

          <CoinPriceBox
            data={coinData.current_price}
          >
            Current Price
          </CoinPriceBox>

          <CoinPriceBox
            data={coinData.current_price}
          >
            Current Price
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

        <div className="flex flex-col gap-4">
          <button className="p-3 font-medium bg-main rounded-md text-white outline-none border-none"> Add to favorites</button>
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

      <div className="border w-full p-4">
        <button className="p-3 font-medium shadow-2xl rounded-md bg-blue-500 text-slate-100 outline-none border-none"> Stimulate Trade</button>
      </div>

    </main>
  );
}
