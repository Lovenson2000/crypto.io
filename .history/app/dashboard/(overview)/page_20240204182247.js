"use client";
import { bitcoinaData } from "@/app/lib/placeholder";
import Image from "next/image";
import MyLine from "@/app/components/MyLine";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaArrowTrendDown } from "react-icons/fa6";
import { fetchCoins } from "@/app/api/data";
import BoxChart from "@/app/components/dashboard/BoxChart";

export default function Page() {
  // const coins = await fetchCoins();
  // console.log(coins);

  return (
    <div className='flex items-center justify-center'>
      <BoxChart />
    </div>
  );
}
