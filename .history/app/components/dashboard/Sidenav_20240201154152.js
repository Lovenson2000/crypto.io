import { SignOutButton } from '@clerk/nextjs';
import Link from 'next/link';
import Logo from '../Logo';
import NavLinks from './NavLinks';

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
      </div>
      <div>
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
      </div>
      <SignOutButton />
    </div>
  );
}