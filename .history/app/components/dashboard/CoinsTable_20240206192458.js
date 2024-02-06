import { fetchCoins } from '@/app/api/data'
import Image from 'next/image';
import React from 'react'

export default function CoinsTable() {
    const data = fetchCoins();
    const coins = data.slice(0, 4);
    // console.log(coins);

    return (
        <div>
            <table>
                <thead className="rounded-lg text-left text-sm font-normal">
                    <tr>
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
                            Date
                        </th>
                        <th scope="col" className="px-3 py-5 font-medium">
                            Status
                        </th>
                    </tr>
                </thead>
                <tbody className='bg-white'>
                    {coins?.map((coin) => (
                        <tr
                            key={coin.id}
                            className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                        >
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
                                {coin.high_24h}
                            </td>
                            <td className="whitespace-nowrap px-3 py-3">
                                {coin.current_price}
                            </td>
                            <td className="whitespace-nowrap px-3 py-3">
                                {coin.rank}
                            </td>

                        </tr>
                    ))}

                </tbody>

            </table>
        </div>

    )
}