"use client";

import { fetchCoins } from "@/app/api/data";
import ChartWrapper from "@/app/components/dashboard/BoxChart";
import CoinsTable from "@/app/components/dashboard/CoinsTable";
import { useEffect, useState } from "react";

export default function Page() {

  return (
    <div className=''>
      <ChartWrapper />
      <CoinsTable />
    </div>
  );
}
