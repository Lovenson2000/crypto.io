
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
          id="customer"
          name="customerId"
          className="block w-full cursor-pointer rounded-md border py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"

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

