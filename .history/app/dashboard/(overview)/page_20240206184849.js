"use client";

import { fetchCoins } from "@/app/api/data";
import ChartWrapper from "@/app/components/dashboard/BoxChart";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input"

export default function Page() {

  const [coins, setCoins] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchCoins();
        setCoins(response.slice(0, 4));
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className=''>
      <ChartWrapper coins={coins} />
      <Input />
    </div>
  );
}