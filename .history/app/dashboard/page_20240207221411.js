import ChartWrapper from "@/app/components/dashboard/BoxChart";
import CoinsTable from "@/app/components/dashboard/CoinsTable";

export default function Page() {

  return (
    <div className='dark:bg-slate-900'>
      <ChartWrapper />
      <CoinsTable />
    </div>
  );
}
