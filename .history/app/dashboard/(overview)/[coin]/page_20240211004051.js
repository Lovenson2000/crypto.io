"use client";

import { fetchCoin } from "@/app/api/data";
import { ReadonlyURLSearchParams, usePathname } from "next/navigation";

export default async function CoinPage () {
  const searchParams = new ReadonlyURLSearchParams();
  const coin = searchParams.get("coin");
  console.log(coin);

  return (
    <div> This page will give details about </div>
  );
}
