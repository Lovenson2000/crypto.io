import Link from 'next/link';

export default function SideNav() {
  return (
    <div className='bg-slate-500 flex flex-col gap-2'>
      <Link href="/dashboard">Overview</Link>
      <Link href="/dashboard">Overview</Link>
      <Link href="/dashboard">Overview</Link>
      <Link href="/dashboard">Overview</Link>
    </div>
  );
}