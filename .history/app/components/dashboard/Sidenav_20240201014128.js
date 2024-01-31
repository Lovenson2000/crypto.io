import { SignOutButton } from '@clerk/nextjs';
import Link from 'next/link';

export default function SideNav() {
  return (
    <div className='bg-slate-200 h-screen shadow-md flex items-center justify-between flex-col gap-2'>
      <div className='flex flex-col'>
        <Link href="/dashboard">Overview</Link>
        <Link href="/dashboard">Overview</Link>
        <Link href="/dashboard">Overview</Link>
        <Link href="/dashboard">Overview</Link>
      </div>
      <SignOutButton afterS />
    </div>
  );
}