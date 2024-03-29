"use client";
import { roundToDecimals } from "@/lib/utils";
import Image from "next/image";
import React, { useState } from "react";

export default function CoinConversionForm({ coins }) {

    const [baseCoin, setBaseCoin] = useState("");
    const [toCoin, setToCoin] = useState("");
    const [amount, setAmount] = useState();
    const [baseCoinImage, setBaseCoinImage] = useState("")
    const [toCoinImage, setToCoinImage] = useState("");
    const [conversionResult, setConversionResult] = useState();
    const [showConversionResult, setShowConversionResult] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (baseCoin && toCoin && amount) {
            const selectedBaseCoin = coins.find((coin) => coin.name === baseCoin);
            const selectedToCoin = coins.find((coin) => coin.name === toCoin);

            const baseCoinPrice = selectedBaseCoin?.current_price;
            const toCoinPrice = selectedToCoin?.current_price;

            if (baseCoinPrice !== undefined && toCoinPrice !== undefined) {

                const result = roundToDecimals((baseCoinPrice * amount) / toCoinPrice, 3);
                setConversionResult(result);
                setShowConversionResult(true);
                setBaseCoinImage(selectedBaseCoin?.image);
                setToCoinImage(selectedToCoin?.image);
            } else {
                alert("Invalid coins or prices.");
            }
        } else {
            alert("Please select 'From' and 'To' coins, and enter an amount.");
        }
    };

    return (
        <div className="flex flex-col md:items-center md:justify-center">
            <form
                onSubmit={handleSubmit}
                className="bg-white dark:bg-slate-800 md:w-1/2 p-4 my-4 rounded shadow-md">
                <h2 className="text-2xl font-bold mb-4">Coin to Coin Conversion</h2>

                {/* The Coin To Convert From */}
                <div className="mb-4">
                    <label htmlFor="baseCoin" className="block text-sm font-medium">
                        From
                    </label>
                    <select
                        id="baseCoin"
                        name="baseCoin"
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
                </div>

                {/* The Coin To Convert to */}
                <div className="mb-4">
                    <label htmlFor="baseCoin" className="block text-sm font-medium">
                        To Coin
                    </label>
                    <select
                        id="toCoin"
                        name="toCoin"
                        value={toCoin}
                        onChange={(e) => setToCoin(e.target.value)}
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
                        Amount to Convert
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
                    Convert
                </button>
            </form>

            {showConversionResult && (
                <div className="p-4 md:w-1/2 rounded-sm flex gap-2 bg-white dark:bg-slate-800">
                    <p className="flex items-center gap-2">
                        <span>{amount}</span>
                        <Image
                            src={baseCoinImage}
                            width={24}
                            height={20}
                            alt="coin-logo"
                        />
                        <span>{baseCoin}</span>
                    </p>
                    <span>=</span>
                    <p className="flex items-center gap-1">
                        <span>{conversionResult}</span>
                        <Image
                            src={toCoinImage}
                            width={24}
                            height={20}
                            alt="coin-logo"
                        />
                        <span>{toCoin}</span>
                    </p>
                </div>
            )}
        </div>
    );
};
