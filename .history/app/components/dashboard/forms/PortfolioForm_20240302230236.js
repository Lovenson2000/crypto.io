"use client";

import { supabaseClient } from "@/lib/supabaseClient";
import { roundToDecimals } from "@/lib/utils";
import { useSession } from "@clerk/nextjs";
import { useState } from "react";

const walletCoins = [
    {
        name: "Bitcoin",
        amount: 2,
        current_price: 62542,
    },
    {
        name: "Ethereum",
        amount: 6,
        current_price: 3342,
    },
];

export default function ({ coins }) {
    const [selectedCoin, setSelectedCoin] = useState("");
    const [amount, setAmount] = useState("");
    const [coinValue, setCoinValue] = useState();
    const [coins, setCoins] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (selectedCoin && !amount == 0) {
            const selectedBaseCoin = coins.find((coin) => coin.name === selectedCoin);
            const coinPrice = selectedBaseCoin?.current_price;

            if (coinPrice !== undefined) {
                const value = roundToDecimals((coinPrice * amount), 3);
                console.log(value);
                return value;
            }
        } else {
            alert("Please select a coin and enter an amount.");
        }
        console.log(coinValue);
    };

    return (
        <div>
            <form
                onSubmit={handleSubmit}
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
                        onChange={(e) => setSelectedCoin(e.target.value)}
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

                <button
                    type="submit"
                    className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
                >
                    Add Coin
                </button>
            </form>
            <PortfolioCoinWrapper />
        </div>
    );
}

export function PortfolioCoinWrapper() {

    const { session } = useSession();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadCoins = async () => {
            try {
                setLoading(true)
                const supabaseAccessToken = await session.getToken({
                    template: 'supabase',
                })
                const supabase = await supabaseClient(supabaseAccessToken)
                const { data: todos } = await supabase.from('todos').select('*')
                setTodos(todos)
            } catch (e) {
                alert(e)
            } finally {
                setLoading(false)
            }
        }
        loadTodos()
    }, [])

    if (loading) {
        return <div className={styles.container}>Loading...</div>
    }

    return (
        <div className="">
            {walletCoins.map((coin) => (
                <div
                    key={coin.id}
                    className="flex p-4 gap-4 my-4 items-center bg-red-500 justify-center shadow-sm rounded-sm"
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
