
import { useSearchParams } from "next/navigation";

export default async function Page ({}) {

  const searchParams = useSearchParams();
  console.log(searchParams.get("bitcoin"));

  return (
    <div> This page will give details about </div>
  );
}