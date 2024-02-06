import { fetchCoins } from '@/app/api/data'
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

                        </tr>
                    ))}

                </tbody>

            </table>
        </div>

    )
}