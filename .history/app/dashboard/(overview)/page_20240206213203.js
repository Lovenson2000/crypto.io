
import ChartWrapper from "@/app/components/dashboard/BoxChart";
import CoinsTable from "@/app/components/dashboard/CoinsTable";

export default function page() {

  return (
    <div className=''>
      <ChartWrapper />
      <CoinsTable />
    </div>
  );
}