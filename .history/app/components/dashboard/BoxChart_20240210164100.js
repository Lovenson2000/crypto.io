import {fetchFirstFourCoins } from '@/app/api/data';
import { roundToDecimals } from '@/lib/utils';
import Image from 'next/image'
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaArrowTrendDown } from "react-icons/fa6";
import SingleLineChart from '../MyLine'

export default async function ChartWrapper() {

    const response = await fetchFirstFourCoins();
    response.sort((a, b) => b.current_price - a.current_price);
    const coins = await response.slice(0, 4);

    return (
        <div className='full'>
            <h1 className='text-xl font-semibold mt-4 dark:text-slate-100  text-slate-700'>Most Popular</h1>
            <div className='grid grid-cols-1 place-items-center place-content-center md:grid-cols-2 lg:grid-cols-4'>
                {
                    coins.map((coin) => (
                        <BoxChart
                            coin={coin}
                            key={coin.id}
                        />
                    ))
                }
            </div>
        </div>
    );
}

function BoxChart({ coin }) {
    return (
        <div className="dark:bg-slate-800 dark:text-slate-100 bg-white w-72 md:w-64 p-3 text-slate-700 relative border-b-2 border-main my-4 shadow-lg rounded-sm">
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
                    <p className="text-[.8rem]">${roundToDecimals(coin.current_price, 2)}
                        <span>{coin.market_cap_change_percentage_24h > 0 ? <FaArrowTrendUp className="text-teal-300" /> : <FaArrowTrendDown className="text-red-500" />}
                        </span>
                    </p>
                </div>
                <div className="w-1/2">
                    <SingleLineChart coin={coin} />
                </div>
            </div>
        </div>
    )
}

