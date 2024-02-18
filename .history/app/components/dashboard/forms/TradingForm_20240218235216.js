"use client";
import React, { useState } from "react";

export default function TradingForm({ coins }) {

    const [action, setAction] = useState(""); // "buy" or "sell"
    const [selectedCoin, setSelectedCoin] = useState("");
    const [amount, setAmount] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();


        if (action && selectedCoin && amount) {
            console.log(`Performing ${action} for ${amount} of ${selectedCoin}`);
        } else {
            alert("Please fill out all the fields.");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* Action (Buy/Sell) */}
            <div className="mb-4">
                <label htmlFor="action" className="block text-sm font-medium">
                    Action
                </label>
                <select
                    id="action"
                    name="action"
                    value={action}
                    onChange={(e) => setAction(e.target.value)}
                    className="dark:bg-slate-900 bg-slate-100 mt-1 p-3 rounded-md w-full border-none outline-none"
                >
                    <option value="" disabled>
                        Select an action
                    </option>
                    <option value="buy">Buy</option>
                    <option value="sell">Sell</option>
                </select>
            </div>

            {/* Coin Selection */}
            <div className="mb-4">
                <label htmlFor="coin" className="block text-sm font-medium">
                    Select Coin
                </label>
                <select
                    id="coin"
                    name="coin"
                    value={selectedCoin}
                    onChange={(e) => setSelectedCoin(e.target.value)}
                    className="dark:bg-slate-900 bg-slate-100 mt-1 p-3 rounded-md w-full border-none outline-none"
                >
                    <option value="" disabled>
                        Select a coin
                    </option>
                    {coins.map((coin) => (
                        <option key={coin.name} value={coin.name}>
                            {coin.name}
                        </option>
                    ))}
                </select>
            </div>

            {/* Amount */}
            <div className="mb-4">
                <label htmlFor="amount" className="block text-sm font-medium">
                    Amount
                </label>
                <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="dark:bg-slate-900 bg-slate-100 mt-1 p-2 rounded-md w-full outline-none focus:border-2 border-indigo-600"
                />
            </div>

            <button
                type="submit"
                className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
            >
                {action === "buy" ? "Buy" : action === "sell" ? "Sell" : "Submit"}
            </button>
        </form>
    );
}
