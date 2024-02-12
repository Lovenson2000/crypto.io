import { fetchCoin } from "@/app/api/data";
import AreaChartBox from "@/app/components/BarChart";
import BarChartBox from "@/app/components/dashboard/BarChart";

export default async function Page({ params }) {

  const { coin } = params;
  const coinData = await fetchCoin(coin);

  return (
    <main className="grid grid-cols-1 md:grid-cols-3">
      <div className="border grid grid-cols-1 md:col-span-2  border-blue-500 items-center justify-center">
        <div className="border border-green-400">
          <AreaChartBox coin={coinData} />
        </div>

        <div className="border border-indigo-500">
          <div>
            <div className="dark:bg-slate-800 dark:text-slate-100 bg-white w-52 md:w-48 p-3 text-slate-700 relative border-b-2 border-main my-4 shadow-lg rounded-sm">

              <h1>Highest 24 <span>{coin.high_24h}</span></h1>
              <h1>Lowest 24 <span>{coin.low_24h}</span></h1>

            </div>

          </div>

          <di>
            <BarChartBox />
          </di>

        </div>
      </div>

      <div className="border border-red-400">
        <h1>Pie chart will go here...</h1>
      </div>

    </main>
  );
}
