"use client";

import { fetchCoin } from "@/app/api/data";
import { usePathname, useSearchParams } from "next/navigation";

export default function CoinPage () {
  const pathname = usePathname();
  
  const searchParams = useSearchParams();

  useEffect(() => {
    // Do something here...
    console.log('Pathname:', pathname);
    console.log('Search Parameters:', searchParams.toString());
  }, [pathname, searchParams]);

  return (
    <div> This page will give details about </div>
  );
}
