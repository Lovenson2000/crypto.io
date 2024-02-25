import { fetchCoins } from "@/app/api/data";
import PortfolioForm from "@/app/components/dashboard/forms/PortfolioForm";

export  async function Page() {

  const balance = 45667;

  const coins = await fetchCoins();
  const sortedCoins = coins.sort((a, b) => a.name.localeCompare(b.name));
  return (
    <div>
      <h1>Balance: ${balance}</h1>
      <PortfolioForm coins={coins} />
    </div>
  );
}
