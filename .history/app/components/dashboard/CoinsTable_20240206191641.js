import { fetchCoins } from '@/app/api/data'
import React from 'react'

export default function CoinsTable() {
    const data = fetchCoins();
    const coins = data.slice(0, 10);
    console.log(coins);


    return (
        <div>
            <table>
                <thead></thead>

            </table>
        </div>

    )
}