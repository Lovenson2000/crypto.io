
import ChartWrapper from "@/app/components/dashboard/BoxChart";
import CoinsTable from "@/app/components/dashboard/CoinsTable";

export async function getServerSideProps() {

  const response = await fetch(API_URL);
  const data = await response.json();

  return {
    props: {
      data,
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
