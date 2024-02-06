
import { API_URL } from "@/app/api/data";
import ChartWrapper from "@/app/components/dashboard/BoxChart";
import CoinsTable from "@/app/components/dashboard/CoinsTable";

export async function getServerSideProps() {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
  

  } catch (error) {
    console.error("Error fetching data", error);
  }

  return {
    props: {
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
