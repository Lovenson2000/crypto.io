"use client";

import { roundToDecimals } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { IoMdArrowDropup } from "react-icons/io";
import SingleLineChart from './charts/MyLine';
import SearchAndFilter from './SearchAndFilter';

export default function CoinsTable({ coins }) {

    const [allCoins, setAllCoins] = useState(coins);
    const [filteredCoins, setFilteredCoins] = useState(coins);

    const handleSearch = (query) => {
        let results = allCoins;

        if (query) {
            results = results.filter((coin) =>
                coin.name.toLowerCase().includes(query.toLowerCase())
            );
        }

        setFilteredCoins(results);
    };

    const handleFilter = (parameter) => {
        let results = [...filteredCoins];

        if (parameter) {
            results = results
                .filter((coin) => coin[parameter] !== undefined && coin[parameter] !== null);

            if (parameter === 'market_cap_rank') {
                results.sort((a, b) => a[parameter] - b[parameter]);
            } else {
                results.sort((a, b) => b[parameter] - a[parameter]);
            }
        }

        setFilteredCoins(results);
    };

    useEffect(() => {
        setAllCoins(coins);
    }, [coins]);

    return (

        <>
            <SearchAndFilter handleSearch={handleSearch} handleFilter={handleFilter} />
            <CoinsTableMobile filteredCoins={filteredCoins} />
            <table className='hidden md:table dark:bg-slate-900'>
                <thead className="rounded-lg text-left text-sm font-normal">
                    <tr>
                        <th scope="col" className="px-3 py-5 font-medium">
                            #
                        </th>
                        <th scope="col" className="px-6 py-5 font-medium">
                            Name
                        </th>
                        <th scope="col" className="px-3 py-5 font-medium">
                            Price
                        </th>
                        <th scope="col" className="px-3 py-5 font-medium">
                            24h %
                        </th>
                        <th scope="col" className="px-3 py-5 font-medium">
                            Market Cap
                        </th>
                        <th scope="col" className="px-3 py-5 font-medium">
                            Circulating Supply
                        </th>
                        <th scope="col" className="px-3 py-5 font-medium">
                            Last 24h
                        </th>
                        <th scope='col' className='px-3 py-5'>

                        </th>
                    </tr>
                </thead>
                <tbody className='bg-white dark:bg-slate-800'>
                    {filteredCoins?.map((coin) => (
                        <tr
                            key={coin.id}
                            className="w-full border-b dark:border-slate-900 dark:hover:bg-slate-700 py-3 text-sm last-of-type:border-none"
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
                                    href={`/dashboard/${coin.id}`}
                                    className="px-12 py-2.5 text-center bg-main hover:bg-violet-700 text-white w-full rounded-full border-none outline-none"
                                >
                                    See More
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}


function CoinsTableMobile({ filteredCoins }) {

    return (

        <table className="w-full flex flex-col items-center md:hidden dark:bg-slate-900">
            <thead className="w-full my-4 rounded-lg text-left text-sm font-normal">
                <tr className="flex flex-col items-start justify-between text-[0.8rem]">
                    <div className="flex items-center justify-btween gap-4">
                        <th scope="col" className="p-2 font-medium">
                            #
                        </th>
                        <th scope="col" className="p-2 font-medium">
                            Name
                        </th>
                        <th scope="col" className="p-2 font-medium">
                            Price
                        </th>
                    </div>

                    <div className="flex items-center justify-btween gap-4">
                        <th scope="col" className="p-2 font-medium">
                            24h %
                        </th>
                        <th scope="col" className="p-2font-medium">
                            Market Cap
                        </th>
                        <th scope="col" className="p-2font-medium">
                            Circulating Supply
                        </th>
                    </div>

                    <div className="flex items-center justify-center gap-4">
                        <th scope="col" className="p-2 font-medium">
                            Last 24h
                        </th>
                    </div>
                </tr>
            </thead>
            <tbody className='bg-white dark:bg-slate-800'>
                {filteredCoins?.map((coin) => (
                    <tr
                        key={coin.id}
                        className="border-b dark:border-slate-900 text-sm last-of-type:border-none rounded-lg"
                    >
                        <div className="w-full flex items-center justify-center gap-4">
                            <td className="whitespace-nowrap px-3 py-3">
                                {coin.market_cap_rank}
                            </td>
                            <td className="whitespace-nowrap py-3">
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
                            <td className="whitespace-nowrap">
                                ${roundToDecimals(coin.current_price, 2)}
                            </td>
                        </div>

                        <div className="w-full flex items-center justify-center">
                            <td className="whitespace-nowrap flex items-center">
                                <span className='text-[0.8rem]'>
                                    {coin.market_cap_change_percentage_24h > 0 ?
                                        <IoMdArrowDropup
                                            className='text-green-500' />
                                        : <IoMdArrowDropup
                                            className="text-red-600 rotate-180" />}
                                </span>
                                {roundToDecimals(coin.market_cap_change_percentage_24h, 2)}%
                            </td>
                            <td className="whitespace-nowrap text-[0.8rem]">
                                ${coin.market_cap}
                            </td>
                            <td className="whitespace-nowrap text-[0.8rem] p-1">
                                {Math.ceil(coin.circulating_supply)}
                                <span className='dark:text-slate-300 text-slate-800 mx-1 uppercase'>{coin.symbol}</span>
                            </td>
                        </div>

                        <div className="w-full flex items-center justify-center p-2">

                            <td className="whitespace-nowrap px-3 py-3">
                                <Link
                                    href={`dashboard/${coin.id}`}
                                    className="px-12 py-2.5 text-center bg-main hover:via-violet-700 text-white w-full rounded-full border-none outline-none"
                                >
                                    See More
                                </Link>
                            </td>
                        </div>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}