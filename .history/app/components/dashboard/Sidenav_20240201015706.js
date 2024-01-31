import { SignOutButton } from '@clerk/nextjs';
import Link from 'next/link';
import Logo from '../Logo';

export default function SideNav() {
  return (
    <div className='h-full shadow-md flex items-center justify-between flex-col gap-2'>
      <div className='flex flex-col'>
        <Link
          href="/"
        >
          <div className='h-20 w-32 md:w-40 bg-red-300'>
            <Logo />
          </div>
        </Link>
        <Link href="/dashboard">Overview</Link>
        <Link href="/dashboard">Overview</Link>
        <Link href="/dashboard">Overview</Link>
        <Link href="/dashboard">Overview</Link>
      </div>
      <SignOutButton />
    </div>
  );
}