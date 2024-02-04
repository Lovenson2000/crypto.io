"use client";

import { AreaChartPlot } from "@/app/components/dashboard/AreaChart";
import { bitcoinaData } from "@/app/lib/placeholder";
import Image from "next/image";

export default function Page() {

  return (
    <div className='flex items-center justify-center'>
      <div className="w-1/2 h-[300px] bg-gray-700 rounded">
        <AreaChartPlot />
      </div>
    </div>
  );
}
