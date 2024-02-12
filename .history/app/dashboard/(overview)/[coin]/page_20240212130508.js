import { fetchCoin } from "@/app/api/data";
import AreaChartBox from "@/app/components/BarChart";

export default async function Page({ params }) {

  const { coin } = params;
  const coinData = await fetchCoin(coin);

  return (
    <main className="grid grid-cols-1 md:grid-cols-3">
      <div className="border grid grid-cols-1 md:col-span-2  border-blue-500 items-center justify-center">
        <div>
          <AreaChartBox coin={coinData} />
        </div>

        <div>
        <h1>Main Bar Chart Container</h1>

        </div>
      </div>

      <div className="border border-red-400">
        <h1>Pie chart will go here...</h1>
      </div>

    </main>
  );
}
