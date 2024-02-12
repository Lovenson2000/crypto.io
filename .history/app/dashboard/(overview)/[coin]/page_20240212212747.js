import { fetchCoin } from "@/app/api/data";
import DesktopAreaChart from "@/app/components/dashboard/charts/DesktopAreaChart";
import DesktopBarChart from "@/app/components/dashboard/charts/DesktopBarChart";
import MobileAreaChart from "@/app/components/dashboard/charts/MobileAreaChart";
import MobileBarChart from "@/app/components/dashboard/charts/MobileBarChart";
import CoinBoxWrapper from "@/app/components/dashboard/CoinBoxWrapper";


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

        <div className="flex flex-col gap-8 md:flex-row items-center justify-center">

          <h1>Last 24 hour prices</h1>

          <div className="w-full md:hidden shadow-sm flex items-center justify-center">
            <MobileAreaChart coin={coinData} />
          </div>

          <div className="hidden w-full md:flex items-center justify-center">
            <DesktopAreaChart coin={coinData} />
          </div>


          <div className="w-full md:hidden flex items-center justify-center shadow-sm">
            <MobileBarChart  />
          </div>

          <div className="hidden w-full md:flex items-center justify-center">
            <DesktopBarChart coin={coinData} />
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

