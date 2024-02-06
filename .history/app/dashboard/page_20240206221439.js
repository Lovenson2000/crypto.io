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
  try {
    const response = await fetchCoins();
    console.log('Response Status:', response.status);

    if (response.status === 200) {
      const coins = await response.json();
      console.log('Coins Data:', coins);

      return {
        props: {
          coins,
        },
      };
    } else {
      console.error('Error fetching data. Status:', response.status);
      return {
        props: {
          coins: [],
        },
      };
    }
  } catch (error) {
    console.error('Error fetching data', error);
    return {
      props: {
        coins: [],
      },
    };
  }
}