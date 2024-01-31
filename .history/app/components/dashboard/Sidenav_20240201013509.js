import { SignOutButton } from '@clerk/nextjs';
import Link from 'next/link';

export default function SideNav() {
  return (
    <div className='bg-slate-100 h-full shadow-md flex items-center justify-between flex-col gap-2'>
      <div>
        <Link href="/dashboard">Overview</Link>
        <Link href="/dashboard">Overview</Link>
        <Link href="/dashboard">Overview</Link>
        <Link href="/dashboard">Overview</Link>
      </div>
      <SignOutButton />
    </div>
  );
}