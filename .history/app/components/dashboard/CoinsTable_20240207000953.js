import { fetchCoins } from '@/app/api/data';
import { roundToDecimals } from '@/app/lib/utils';
import Image from 'next/image';
import { IoMdArrowDropup } from "react-icons/io";

export default async function CoinsTable() {
    const response = await fetchCoins();
    const coins = response.slice(0, 10);
    console.log(coins);

    return (
        <table className='w-full'>
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
                        24h %
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
                            ${roundToDecimals(coin.current_price, 2)}
                        </td>
                        <td className="whitespace-nowrap flex items-center px-3 py-3">
                            <span className='text-2xl'>
                                {coin.market_cap_change_percentage_24h > 0 ? 
                                <IoMdArrowDropup 
                                    className='text-green-500' /> 
                                : <IoMdArrowDropup 
                                    className="text-red-600 rotate-180" />}
                                    </span>
                                {roundToDecimals(coin.market_cap_change_percentage_24h, 2)}%
                        </td>
                        <td className="whitespace-nowrap px-3 py-3">
                            ${coin.market_cap}
                        </td>
                        <td className="whitespace-nowrap px-3 py-3">
                            {coin.circulating_supply}
                            <span className='text-slate-800 mx-1 uppercase'>{coin.symbol}</span>
                        </td>
                    </tr>
                ))}

            </tbody>
        </table>
    )
}

