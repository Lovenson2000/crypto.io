import ChartWrapper from "@/app/components/dashboard/BoxChart";
import CoinsTable from "@/app/components/dashboard/CoinsTable";

export async function getServerSideProps() {
  const data = await fetchCoins();
  const coins = data.slice(0, 10);

  return {
      props : {
          coins,
      },
  };
}

export default function Page(coins) {

  return (
    <div className=''>
      <ChartWrapper />
      <CoinsTable coins={coins} />
    </div>
  );
}
