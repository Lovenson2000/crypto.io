import { fetchCoins } from '@/app/api/data'
import React from 'react'

export default function CoinsTable() {
    const data = fetchCoins();
    const coins = data.slice(0, 10);
    console.log(coins);


    return (
        <div>
            <table>
                <thead className="rounded-lg text-left text-sm font-normal">
                    <tr>
                        <th></th>
                    </tr>
                </thead>

            </table>
        </div>

    )
}