"use client";

import { useState } from "react";


export default function ({ coins }) {
    const [selectedCoin, setSelectedCoin] = useState();

    return (
        <form>
            <select
                id="selectedCoin"
                name="selectedCoin"
                value={baseCoin}
                onChange={(e) => setBaseCoin(e.target.value)}
                className="dark:bg-slate-900 bg-slate-100 mt-1 p-3 rounded-md w-full border-none outline-none"
            >
                <option value="" disabled>
                    Select a coin
                </option>
                {coins.map((coin) => (
                    <option
                        value={coin.name}
                        key={coin.id}
                    >
                        {coin.name}
                    </option>
                ))}
            </select>
        </form>
    );
}