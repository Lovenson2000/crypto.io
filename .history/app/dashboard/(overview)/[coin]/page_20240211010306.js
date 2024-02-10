"use client";

import { fetchCoin } from "@/app/api/data";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function CoinPage () {

  const [coinData, setCoinData] = useState(null);

  const coin = usePathname().split("/").pop();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchCoin(coin);
        setCoinData(data);
      } catch (error) {
        console.error("Error fetching coin data:", error);
      }
    };

    fetchData();
  }, [coin]); 

  return (
    <div> This page will give details about {coinData.name} </div>
  );
}
