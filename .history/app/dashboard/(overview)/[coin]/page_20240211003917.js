"use client";

import { fetchCoin } from "@/app/api/data";
import { usePathname } from "next/navigation";

export default async function CoinPage () {
  const searchParams = new URLSearchParams();
  const coin = searchParams.get("id");

  return (
    <div> This page will give details about </div>
  );
}
