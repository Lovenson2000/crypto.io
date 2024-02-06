import { fetchCoins } from '@/app/api/data'
import Image from 'next/image';

export default async function CoinsTable() {
    const data = await fetchCoins();
    const coins = data.slice(0, 7);

    return (
        <div>
            <table>
                <thead className="rounded-lg text-left text-sm font-normal">
                    <tr>
                        <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                            #
                        </th>
                        <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                            Name
                        </th>
                        <th scope="col" className="px-3 py-5 font-medium">
                            Price
                        </th>
                        <th scope="col" className="px-3 py-5 font-medium">
                            Amount
                        </th>
                        <th scope="col" className="px-3 py-5 font-medium">
                            Market Cap
                        </th>
                        <th scope="col" className="px-3 py-5 font-medium">
                            Circulating Supply
                        </th>
                    </tr>
                </thead>
                <tbody className='bg-white'>
                    {coins?.map((coin) => (
                        <tr
                            key={coin.id}
                            className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                        >
                            <td className="whitespace-nowrap px-3 py-3">
                                {coin.market_cap_rank}
                            </td>
                            <td className="whitespace-nowrap py-3 pl-6 pr-3">
                                <div className="flex items-center gap-3">
                                    <Image
                                        src={coin.image}
                                        className="rounded-full"
                                        width={28}
                                        height={28}
                                        alt={`${coin.name}'s logo`}
                                    />
                                    <p>{coin.name}</p>
                                </div>
                            </td>
                            <td className="whitespace-nowrap px-3 py-3">
                                {coin.current_price}
                            </td>
                            <td className="whitespace-nowrap px-3 py-3">
                                {coin.current_price}
                            </td>
                            <td className="whitespace-nowrap px-3 py-3">
                                {coin.market_cap}
                            </td>
                            <td className="whitespace-nowrap px-3 py-3">
                                {coin.circulating_supply}
                            </td>
                            

                        </tr>
                    ))}

                </tbody>
            </table>
        </div>

    )
}