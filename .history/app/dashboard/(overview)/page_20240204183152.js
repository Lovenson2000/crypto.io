"use client";
import { bitcoinaData } from "@/app/lib/placeholder";
import BoxChart from "@/app/components/dashboard/BoxChart";
import ChartWrapper from "@/app/components/dashboard/BoxChart";

export default function Page() {

  return (
    <div className='flex flex-col items-center justify-center'>
      <ChartWrapper />
    </div>
  );
}