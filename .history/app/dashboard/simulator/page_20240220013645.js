
import { fetchCoins } from '@/app/api/data';
import FormContainer from '@/app/components/dashboard/FormContainer';

export default async function Page() {
  const coins = await fetchCoins();
  const sortedCoins = coins.sort((a, b) => a.name.localeCompare(b.name));
  
  return (
    <FormContainer coins={sortedCoins} />
  );
}

