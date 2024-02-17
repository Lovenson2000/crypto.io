"use client";
import { useUser } from '@clerk/nextjs';
import { useState } from 'react';
import CoinConversionForm from './forms/CoinConversionForm';
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
    const { isSignedIn, user, isLoaded } = useUser();
    const [selectedAction, setSelectedAction] = useState('');

    const handleActionChange = (e) => {
        setSelectedAction(e.target.value);
    };

    return (
        <div>
            <h1 className="text-slate-800">Hello, {user.firstName}</h1>
            <form>
                <select
                    name="action"
                    value={selectedAction}
                    onChange={handleActionChange}
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

            {selectedAction === 'conversion' && <CoinConversionForm coins={coins} />}
            {selectedAction === 'trade' && <TradingForm coins={coins} />}
        </div>
    )
}
