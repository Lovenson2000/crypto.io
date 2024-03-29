import { fetchCoin } from "@/app/api/data";
import DesktopAreaChart from "@/app/components/dashboard/charts/DesktopAreaChart";
import DesktopBarChart from "@/app/components/dashboard/charts/DesktopBarChart";
import MobileAreaChart from "@/app/components/dashboard/charts/MobileAreaChart";
import MobileBarChart from "@/app/components/dashboard/charts/MobileBarChart";
import CoinBoxWrapper from "@/app/components/dashboard/CoinBoxWrapper";
import Link from "next/link";


export default async function Page({ params }) {
  const { coin } = params;
  const coinData = await fetchCoin(coin);

  return (
    <main className="w-full grid grid-cols-1 my-6 py=3 gap-6">
      <div className="grid grid-cols-1 w-full items-center justify-center gap-8">

        <CoinBoxWrapper coinData={coinData} />

        <div className="flex flex-col md:items-center gap-4">
          <Link
            href="/dashboard/coins"
            className="p-2 w-full md:w-60 font-normal text-lg bg-blue-600 hover:bg-blue-700 rounded-md text-white outline-none border-none">
            Add to favorites
          </Link>
        </div>

        <div className="flex flex-col gap-8 md:flex-row items-center justify-center">

          <div className="w-full md:hidden shadow-sm flex flex-col items-center justify-center">
            <h1>Last 24 hour prices</h1>
            <MobileAreaChart coin={coinData} />
          </div>

          <div className="hidden w-full md:flex flex-col items-center justify-center">
            <h1>Last 24 hour prices</h1>
            <DesktopAreaChart coin={coinData} />
          </div>


          <div className="w-full md:hidden flex flex-col items-center justify-center shadow-sm">
            <h1>Last 7 day average prices</h1>
            <MobileBarChart coin={coinData} />
          </div>

          <div className="hidden w-full md:flex flex-col items-center justify-center">
            <h1>Last 7 day average prices</h1>
            <DesktopBarChart coin={coinData} />
          </div>

        </div>

      </div>

      <div className="flex flex-col md:items-center gap-4">
        <Link
          href="/dashboard/simulator"
          className="p-2 w-full md:w-60 text-center font-normal text-lg bg-blue-600 hover:bg-blue-700 rounded-md text-white outline-none border-none">
          Simulate trade
        </Link>
      </div>

    </main>
  );
}

