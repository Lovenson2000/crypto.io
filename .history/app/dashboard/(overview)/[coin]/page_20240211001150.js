"use client"
import { useSearchParams } from "next/navigation";

export default function Page () {

  const searchParams = useSearchParams();
  console.log(searchParams);
  return (
    <div> This page will give details about </div>
  );
}