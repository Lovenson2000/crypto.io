"use client";
import { useUser } from '@clerk/nextjs';
import { useState } from 'react';
import CoinConversionForm from './forms/CoinConversionForm'
import TradingForm from './forms/TradingForm';

const actions = [
    {
        label: "Simulate Trade",
        value: "trade"
    },
    {
        label: "Currency Conversion",
        value: "conversion"
    }
];

export default function FormContainer({ coins }) {
    const [selectedAction, setSelectedAction] = useState('');

    const { isSignedIn, user, isLoaded } = useUser();

    return (
        <div>
            <h1>Hello,</h1>
            <form>
                <select
                    name="action"
                    className="dark:bg-slate-800 mt-1 p-3 rounded-md w-full border-none outline-none shadow-md border-1"
                >
                    <option value="" disabled>
                        Select an action
                    </option>
                    {actions.map((action) => (
                        <option key={action.value} value={action.value}>
                            {action.label}
                        </option>
                    ))}
                </select>
            </form>

            <CoinConversionForm coins={coins} />
            <TradingForm coins={coins}/>
        </div>
    )
}