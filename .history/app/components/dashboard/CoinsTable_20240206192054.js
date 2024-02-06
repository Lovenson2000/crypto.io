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
                        className="" 
                        >

                        </tr>
                    ))}

                </tbody>

            </table>
        </div>

    )
}