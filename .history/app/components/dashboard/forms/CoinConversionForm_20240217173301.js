"use client";
import React, { useState } from "react";

const CoinConversionForm = ({ coins }) => {

    const [baseCoin, setBaseCoin] = useState("");
    const [toCoin, setToCoin] = useState("Ethereum");
    const [amount, setAmount] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const selectedBaseCoin = coins.filter((coin) => coin.name === baseCoin);
        const selectedToCoin = coins.filter((coin) => coin.name === toCoin);
        const baseCoinPrice = selectedBaseCoin[0].current_price;
        const toCoinPrice = selectedToCoin[0].current_price;

        const conversionResult = (baseCoinPrice * amount )* toCoinPrice;
        console.log(conversionResult);
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
                    onChange={(e) => setBaseCoin(e.target.value)}
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
                    onChange={(e) => setToCoin(e.target.value)}
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
                    onChange={(e) => setAmount(e.target.value)}
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
