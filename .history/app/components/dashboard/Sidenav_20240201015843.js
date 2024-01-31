import { SignOutButton } from '@clerk/nextjs';
import Link from 'next/link';
import Logo from '../Logo';

export default function SideNav() {
  return (
    <div className='h-full shadow-md flex flex-col px-3 py-4 md:px-2'>
      <div className='flex flex-col'>
      <Link
          className="mb-2 flex h-20 items-end justify-start rounded-md bg-blue-600 p-4 md:h-40"
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