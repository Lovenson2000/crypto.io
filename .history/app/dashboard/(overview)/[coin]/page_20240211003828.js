"use client";

import { fetchCoin } from "@/app/api/data";
import { usePathname } from "next/navigation";

export default async function CoinPage () {
  const searchParams = URLSearchParams();
  console.log(pathname);

  return (
    <div> This page will give details about </div>
  );
}
