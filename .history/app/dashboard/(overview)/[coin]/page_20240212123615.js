import { fetchCoin } from "@/app/api/data";
import AreaChartBox from "@/app/components/BarChart";

export default async function Page({ params }) {

  const { coin } = params;
  const coinData = await fetchCoin(coin);

  return (
    <main className="grid grid-cols-1">
      <div>
        <div>

        </div>

        <div>

        </div>
      </div>
      <div className="border">

      </div>


    </main>
  );
}
