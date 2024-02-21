import ChartWrapper from "@/app/components/dashboard/charts/BoxChart";
import CoinsTable from "@/app/components/dashboard/CoinsTable";
import { fetchCoins } from "../../api/data";

export default async function Page() {
  const response = await fetchCoins();
  const coins = await response.slice(0, 60);

  return (
    <div className='w-full dark:bg-slate-900 flex flex-col'>
      <ChartWrapper />
      <CoinsTable coins={coins} />
    </div>
  );
}
