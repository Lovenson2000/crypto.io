"use client";

import { fetchCoin } from "@/app/api/data";
import { usePathname } from "next/navigation";

export default async function CoinPage () {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <div> This page will give details about </div>
  );
}
