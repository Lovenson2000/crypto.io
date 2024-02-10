"use client";

import { fetchCoin } from "@/app/api/data";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function CoinPage () {
  const pathname = usePathname()
  const searchParams = useSearchParams()
 
  useEffect(() => {
    const url = `${pathname}?${searchParams}`
    console.log(url)
    // You can now use the current URL
    // ...
  }, [pathname, searchParams])

  return (
    <div> This page will give details about </div>
  );
}
