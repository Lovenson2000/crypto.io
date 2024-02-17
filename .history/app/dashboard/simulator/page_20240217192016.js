
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
    <div>
      <h1>Hello User</h1>
      <form>
        <select
          name="action"
          className="dark:bg-slate-800 mt-1 p-3 rounded-md w-full border-none outline-none shadow-md"
        >
          <option value="" disabled>
            Select an action
          </option>
          {actions.map((action) => (
            <option key={action.value} value={action.value}>
              {action.label}
            </option>
          ))}
        </select>
      </form>

      <CoinConversionForm coins={sortedCoins} />
    </div>
  );
}

