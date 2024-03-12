"use client";

import { useState } from "react";

const wallet = [
    {
        coinName: "Bitcoin",
        amount: 0.24,
        current_price: 62542,
    },
    {
        coinName: "Ethereum",
        amount: 3,
        current_price: 3842,
    },
    {
        coinName: "Solana",
        amount: 8,
        current_price: 387,
    },
];

export default function ({ coins }) {
    const [selectedCoin, setSelectedCoin] = useState();
    const [amount, setAmount] = useState();

    const addCoinToPortfolio = (e) => {
        e.preventDefault();

        if (baseCoin && amount) {
            const selectedBaseCoin = coins.find((coin) => coin.name === baseCoin);
            const baseCoinPrice = selectedBaseCoin?.current_price;

            if (baseCoinPrice !== undefined) {
                const value = roundToDecimals((baseCoinPrice * amount), 3);
            } else {
                alert("Invalid coins or prices.");
            }
        } else {
            alert("Please select 'From' and 'To' coins, and enter an amount.");
        }
    };

    return (
        <form
            onSubmit={addCoinToPortfolio}
            className="bg-white dark:bg-slate-800 md:w-1/2 p-4 my-4 rounded shadow-md"
        >
            <div className="mb-4">
                <label htmlFor="selectedCoin" className="block text-sm font-medium">
                    Coin
                </label>
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
            </div>

            <div className="mb-4">
                <label htmlFor="amount" className="block text-sm font-medium">
                    Actual balance
                </label>
                <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="dark:bg-slate-900 bg-slate-100 mt-1 p-2 rounded-md w-full outline-none focus:border-2 border-indigo-600"
                />
            </div>
        </form>
    );
}

export function PortfolioCoinWrapper({wallet}) {

    return (
        <div className="m-2">
            {wallet.map((coin) => (
                <div 
                    key={coin.id}
                    className="flex p-4 items-center bg-red-500 justify-center shadow-sm rounded-sm"
                >
                    <h1>{coin.name}</h1>
                    <h2>{coin.amount}</h2>
                    <h2>{coin.current_price}</h2>
                    <h2>{coin.amount * coin.current_price}</h2>      
                </div>
            ))}
        </div>
    );
}