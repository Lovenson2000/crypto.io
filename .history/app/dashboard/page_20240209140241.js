import ChartWrapper from "@/app/components/dashboard/BoxChart";
import CoinsTable from "@/app/components/dashboard/CoinsTable";
import { any } from "prop-types";
import { fetchCoins } from "../api/data";
import SearchAndFilter from "../components/dashboard/SearchAndFilter";

export default async function Page() {
  const response = await fetchCoins();
    const coins = response.slice(0, 7);
    // console.log(coins);

  return (
    <div className='dark:bg-slate-900 flex flex-col'>
      <ChartWrapper />
      <SearchAndFilter />
      <CoinsTable coins={coins} />
    </div>
  );
}