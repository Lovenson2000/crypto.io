
import ChartWrapper from "@/app/components/dashboard/BoxChart";
import CoinsTable from "@/app/components/dashboard/CoinsTable";

const API_URL = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true&24h&precision=3&x_cg_demo_api_key=CG-wMgmuqaPW6MjCgN1QbY11ZQM";

export default function Page(coins) {

  return (
    <div className=''>
      <ChartWrapper />
      <CoinsTable coins={coins} />
    </div>
  );
}


export async function getServerSideProps() {
  // Fetch data from an API
  const response = await fetch(API_URL);
  const coins = await response.json();

  return {
    props: { coins },
  };
}
