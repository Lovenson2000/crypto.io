"use client";

import { fetchCoin } from "@/app/api/data";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function CoinPage () {

  const pathname = usePathname().split("/").pop();
  console.log(pathname);

  return (
    <div> This page will give details about </div>
  );
}
