"use client";

import { fetchCoin } from "@/app/api/data";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function CoinPage () {

  const coin = usePathname().split("/").pop();
  fetchCoin(coin)

  return (
    <div> This page will give details about </div>
  );
}
