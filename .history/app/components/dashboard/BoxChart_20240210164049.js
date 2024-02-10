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


function CoinsTableMobile({ filteredCoins }) {

    return (

        <table className="w-full dark:bg-slate-900">

            <thead className="bg-red-500 rounded-lg text-left text-sm font-normal">
                <tr className="grid grid-cols-3 grid-rows-2 gap-4">
                    <div className="w-full flex items-center justify-center">
                        <th scope="col" className="px-3 py-5 font-medium">
                            #
                        </th>
                        <th scope="col" className="px-6 py-5 font-medium">
                            Name
                        </th>
                        <th scope="col" className="px-3 py-5 font-medium">
                            Price
                        </th>
                    </div>
                    <div>
                        <th scope="col" className="px-3 py-5 font-medium">
                            24h %
                        </th>
                        <th scope="col" className="px-3 py-5 font-medium">
                            Market Cap
                        </th>
                        <th scope="col" className="px-3 py-5 font-medium">
                            Circulating Supply
                        </th>
                    </div>
                    <div>
                        <th scope="col" className="px-3 py-5 font-medium">
                            Last 24h
                        </th>
                        <th scope='col' className='px-3 py-5'>

                        </th>
                    </div>
                </tr>
            </thead>
            <tbody className='bg-white dark:bg-slate-800'>
                {filteredCoins?.map((coin) => (
                    <tr
                        key={coin.id}
                        className="w-full border-b dark:border-slate-900 py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                    >
                        <td className="whitespace-nowrap px-3 py-3">
                            {coin.market_cap_rank}
                        </td>
                        <td className="whitespace-nowrap py-3 pl-6 pr-3">
                            <div className="flex items-center gap-3">
                                <Image
                                    src={coin.image}
                                    className="rounded-full"
                                    width={28}
                                    height={28}
                                    alt={`${coin.name}'s logo`}
                                />
                                <p>{coin.name}</p>
                            </div>
                        </td>
                        <td className="whitespace-nowrap px-3 py-3">
                            ${roundToDecimals(coin.current_price, 2)}
                        </td>
                        <td className="whitespace-nowrap flex items-center px-3 py-3">
                            <span className='text-2xl'>
                                {coin.market_cap_change_percentage_24h > 0 ?
                                    <IoMdArrowDropup
                                        className='text-green-500' />
                                    : <IoMdArrowDropup
                                        className="text-red-600 rotate-180" />}
                            </span>
                            {roundToDecimals(coin.market_cap_change_percentage_24h, 2)}%
                        </td>
                        <td className="whitespace-nowrap px-3 py-3">
                            ${coin.market_cap}
                        </td>
                        <td className="whitespace-nowrap px-3 py-3">
                            {Math.ceil(coin.circulating_supply)}
                            <span className='dark:text-slate-300 text-slate-800 mx-1 uppercase'>{coin.symbol}</span>
                        </td>
                        <td className="whitespace-nowrap px-3 py-3">
                            <SingleLineChart coin={coin} />
                        </td>

                        <td className="whitespace-nowrap px-3 py-3">
                            <Link
                                href=""
                                className="px-12 py-2.5 text-center bg-main text-white w-full rounded-full border-none outline-none"
                            >
                                See More
                            </Link>
                        </td>

                    </tr>
                ))}
            </tbody>

        </table>

    );
}