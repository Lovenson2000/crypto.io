"use client";

import { fetchCoins } from '@/app/api/data';
import { roundToDecimals } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { IoMdArrowDropup } from "react-icons/io";
import SingleLineChart from '../MyLine';
import SearchAndFilter from './SearchAndFilter';

export default function CoinsTable({coins}) {

    const [allCoins, setAllCoins] = useState(coins);
    const [filteredCoins, setFilteredCoins] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetchCoins();
            setAllCoins(response.slice(0, 6));
        };

        fetchData();
    }, []);

    // Function to handle search and update filtered coins
    const handleSearch = (query) => {
        if (query) {
            const filteredResults = allCoins.filter((coin) =>
                coin.name.toLowerCase().includes(query.toLowerCase())
            );
            setFilteredCoins(filteredResults);
        } else {
            setFilteredCoins(allCoins);
        }
    };

    return (

        <>
            <SearchAndFilter handleSearch={handleSearch} />
            <table className='w-full dark:bg-slate-900'>
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
        </>
    )
}

