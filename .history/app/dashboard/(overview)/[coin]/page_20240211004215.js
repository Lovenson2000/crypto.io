"use client";

import { fetchCoin } from "@/app/api/data";
import { useSearchParams } from "next/navigation";

export default function CoinPage () {
  const params = useSearchParams();
  const coin = params.get("id");
  console.log(coin);

  return (
    <div> This page will give details about </div>
  );
}
