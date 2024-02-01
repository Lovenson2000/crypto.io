import { Sheet } from '@/components/ui/sheet';
import { SignOutButton } from '@clerk/nextjs';
import Link from 'next/link';
import Logo from '../Logo';
import NavLinks from './NavLinks';

export default function SideNav() {
  return (
    <div className='h-full shadow-md flex flex-col px-3 py-4 md:px-2'>
      <div className='flex flex-col'>
        <div
          className="mb-2 flex h-20 items-center justify-between rounded-md bg-blue-200 p-4 md:h-40"
        >
          <div className='h-20 w-32 md:w-40 flex bg-red-300'>
            <Logo />
          </div>
          
        </div>
      </div>
      {/* <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md bg-gray-200 md:block"></div>
      </div>
      <SignOutButton className="hidden md:block" /> */}
    </div>
  );
}