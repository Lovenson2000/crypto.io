import Charts from "@/app/components/Chart";
import { bitcoinaData } from "@/app/lib/placeholder";
import Image from "next/image";

export default function Page() {

  return (
    <div className='flex items-center justify-center'>
      <Charts />
    </div>
  );
}
