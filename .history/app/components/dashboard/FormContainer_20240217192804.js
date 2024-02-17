import React from 'react'
import CoinConversionForm from './forms/CoinConversionForm'

function FormContainer({coins}) {
    return (
        <div>
            <h1>Hello User</h1>
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

            <CoinConversionForm coins={sortedCoins} />
        </div>
    )
}

export default FormContainer