import { SignOutButton } from '@clerk/nextjs';
import Link from 'next/link';
import Logo from '../Logo';

export default function SideNav() {
  return (
    <div className='h-screen shadow-md flex items-center justify-between flex-col gap-2'>
      <div className='flex flex-col'>
        <div className='bg-'>
          <Logo/>
        </div>
        <Link href="/dashboard">Overview</Link>
        <Link href="/dashboard">Overview</Link>
        <Link href="/dashboard">Overview</Link>
        <Link href="/dashboard">Overview</Link>
      </div>
      <SignOutButton />
    </div>
  );
}