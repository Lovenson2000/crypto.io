"use client";

import { useState } from "react";


export default function ({ coins }) {
    const [selectedCoin, setSelectedCoin] = useState();
    const [amount, setAmount] = useState();

    return (
        <form
            className="bg-white dark:bg-slate-800 md:w-1/2 p-4 my-4 rounded shadow-md"
        >
            <select
                id="selectedCoin"
                name="selectedCoin"
                value={selectedCoin}
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

            <div className="mb-4">
                <label htmlFor="amount" className="block text-sm font-medium">
                    Amount to Convert
                </label>
                <input
                    type="number"
                    value={amount}
                    className="dark:bg-slate-900 bg-slate-100 mt-1 p-2 rounded-md w-full outline-none focus:border-2 border-indigo-600"
                />
            </div>
        </form>
    );
}