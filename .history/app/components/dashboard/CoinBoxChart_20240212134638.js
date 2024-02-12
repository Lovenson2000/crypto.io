import React from 'react'

export default function CoinBoxChart({price, children}) {
    return (
        <div className="dark:bg-slate-800 text-[0.9rem] dark:text-slate-100 bg-white w-44 md:w-48 p-4 text-slate-700 relative border-b-2 border-main my-4 shadow-lg rounded-sm">
            <h1>{children}</h1>
            <span>${price}</span>
        </div>
    );
}

