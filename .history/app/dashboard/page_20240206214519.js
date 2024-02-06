
import ChartWrapper from "@/app/components/dashboard/BoxChart";
import CoinsTable from "@/app/components/dashboard/CoinsTable";

export default function Page({coins}) {

  return (
    <div className=''>
      <ChartWrapper />
      <CoinsTable coins={coins} />
    </div>
  );
}

export async function getServerSideProps() {

  const response = await fetchCoins();
  const coins = await response.json();

  return {
      props: {
          coins
      }
  };
}