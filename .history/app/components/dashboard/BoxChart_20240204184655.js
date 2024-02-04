"use client"

import Image from 'next/image'
import React from 'react'
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaArrowTrendDown } from "react-icons/fa6";
import SingleLineChart from '../MyLine'

export default async function ChartWrapper({ coins }) {

    return (
        <div className='flex flex-col items-center justify-center'>
            {
                coins.map((coin) => (
                    <BoxChart
                        coin={coin}
                    />
                ))
            }
        </div>
    );
}

function BoxChart({ coin }) {
    return (
        <>
            <div className="bg-white w-52 p-3 text-slate-700 relative border-b-2 border-main m-4 shadow-md rounded-sm">

                <Image
                    width={30}
                    height={30}
                    src={coin.image}
                    alt={coin.name}
                    className="absolute top-[-12px] left-1/2 transform -translate-x-1/2 "
                />
                <div className="flex items-center mt-4 gap-4 h-full w-full justify-between">
                    <div className="w-1/2 flex flex-col">
                        <p className="text-xl font-semibold">{coin.name}</p>
                        <p className="text-[.8rem]">${coin.current_price}
                            <span>{coin.market_cap_change_percentage_24h > 0 ? <FaArrowTrendUp className="text-teal-300" /> : <FaArrowTrendDown className="text-red-500" />}
                            </span>
                        </p>
                    </div>
                    <div className="w-1/2">
                        <SingleLineChart coin={coin} />
                    </div>
                </div>
            </div>
        </>
    )
}
