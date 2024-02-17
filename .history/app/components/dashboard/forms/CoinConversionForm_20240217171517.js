"use client";
import React, { useState } from "react";

const CoinConversionForm = ({ coins }) => {

    const [baseCoin, setBaseCoin] = useState("Bitcoin/BTC");
    const [toCoin, setToCoin] = useState("Ethereum");
    const [amount, setAmount] = useState("");

    const handleBaseCoinChange = (e) => {
        setBaseCoin(e.target.value);
    };

    const handleToCoinChange = (e) => {
        setToCoin(e.target.value);
    };

    const handleAmountChange = (e) => {
        setAmount(e.target.value);
    };

    const handleSubmit = (e) => {

        e.preventDefault();
        

    };

    return (
        <form className="bg-white p-4 rounded shadow-md">
            <h2 className="text-2xl font-bold mb-4">Coin Conversion Form</h2>
            
            {/* The Coin To Convert From */}
            <div className="mb-4">
                <label htmlFor="baseCoin" className="block text-sm font-medium text-gray-600">
                    From
                </label>
                <select
                    id="baseCoin"
                    name="baseCoin"
                    value={baseCoin}
                    onChange={handleBaseCoinChange}
                    className="mt-1 p-2 border rounded-md w-full"
                >
                    {coins.map((coin) => (
                        <option
                            value={coin.name}
                        >
                            {coin.name}
                        </option>
                    ))}
                </select>
            </div>

            {/* The Coin To Convert to */}
            <div className="mb-4">
                <label htmlFor="baseCoin" className="block text-sm font-medium text-gray-600">
                    To Coin
                </label>
                <select
                    id="toCoin"
                    name="toCoin"
                    value={toCoin}
                    onChange={handleToCoinChange}
                    className="mt-1 p-2 border rounded-md w-full"
                >
                    {coins.map((coin) => (
                        <option
                            value={coin.name}
                        >
                            {coin.name}
                        </option>
                    ))}
                </select>
            </div>
            
            <div className="mb-4">
                <label htmlFor="amount" className="block text-sm font-medium text-gray-600">
                    Amount to Convert
                </label>
                <input
                    type="text"
                    id="amount"
                    name="amount"
                    value={amount}
                    onChange={handleAmountChange}
                    className="mt-1 p-2 border rounded-md w-full"
                />
            </div>
            <button
                type="submit"
                onClick={handleSubmit}
                className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
            >
                Convert
            </button>
        </form>
    );
};

export default CoinConversionForm;
