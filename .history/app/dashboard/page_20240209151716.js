import ChartWrapper from "@/app/components/dashboard/BoxChart";
import CoinsTable from "@/app/components/dashboard/CoinsTable";
import SearchAndFilter from "../components/dashboard/SearchAndFilter";

export default function Page() {

  return (
    <div className='dark:bg-slate-900 flex flex-col'>
      <ChartWrapper />
      <SearchAndFilter />
      <CoinsTable />
    </div>
  );
}
