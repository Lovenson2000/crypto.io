"use client"
import ChartWrapper from "@/app/components/dashboard/BoxChart";
import CoinsTable from "@/app/components/dashboard/CoinsTable";
import { useState } from "react";
import { fetchCoins } from "../api/data";
import SearchAndFilter from "../components/dashboard/SearchAndFilter";

const response = await fetchCoins();
const coins = response.slice(0, 7);

export default async function Page() {
  const [filteredCoins, setFilteredCoins] = useState(coins);

  function handleSearch(query) {
    let filteredResults = coins;
    const filteredCoins = coins.filter((coin) => coin.name.toLowerCase().includes(query));
    setFilteredCoins(filteredCoins);

  }

  return (
    <div className='dark:bg-slate-900 flex flex-col'>
      <ChartWrapper />
      <SearchAndFilter handleSearch={handleSearch}/>
      <CoinsTable coins={filteredCoins} />
    </div>
  );
}
