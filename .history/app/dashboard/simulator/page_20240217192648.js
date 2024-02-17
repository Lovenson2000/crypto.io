
import { fetchCoins } from '@/app/api/data';
import CoinConversionForm from '@/app/components/dashboard/forms/CoinConversionForm';
// import { useUser } from '@clerk/nextjs';

const actions = [
  {
    label: "Simulate Trade",
    value: "trade"
  },
  {
    label: "Currency Conversion",
    value: "conversion"
  }
];

export default async function Page() {
  const coins = await fetchCoins();
  const sortedCoins = coins.sort((a, b) => a.name.localeCompare(b.name));
  // const { isSignedIn, user, isLoaded } = useUser();
  
  return (
    
  );
}

