import { useSearchParams } from "next/navigation";

export default function Page () {

  const searchParams = useSearchParams();
  return (
    <div> This page will give details about </div>
  );
}
