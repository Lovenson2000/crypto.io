import React from 'react'

export default function CoinBoxChart({coin}) {
    return (
        <div className="dark:bg-slate-800 text-[0.9rem] dark:text-slate-100 bg-white w-44 md:w-48 p-4 text-slate-700 relative border-b-2 border-main my-4 shadow-lg rounded-sm">

            <h1>Highest 24 <span>${coin.high_24h}</span></h1>
            <h1>Lowest 24 <span>${coin.low_24h}</span></h1>

        </div>
    );
}

