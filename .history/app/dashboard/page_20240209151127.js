"use client";
import { useState, useEffect } from "react";
import ChartWrapper from "@/app/components/dashboard/BoxChart";
import CoinsTable from "@/app/components/dashboard/CoinsTable";
import { fetchCoins } from "../api/data";
import SearchAndFilter from "../components/dashboard/SearchAndFilter";

export default function Page() {
  const [coins, setCoins] = useState([]);
  const [filteredCoins, setFilteredCoins] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchCoins();
      setCoins(response.slice(0, 7));
    };

    fetchData();
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query);
    const filteredResults = coins.filter((coin) =>
      coin.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredCoins(filteredResults);
  };

  return (
    <div className="dark:bg-slate-900 flex flex-col">
      <ChartWrapper />
      <SearchAndFilter onSearch={handleSearch} />
      <CoinsTable coins={searchQuery ? filteredCoins : coins} />
    </div>
  );
}
