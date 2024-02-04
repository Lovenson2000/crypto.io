import { RiShutDownLine } from "react-icons/ri";
import { SignOutButton } from '@clerk/nextjs';
import Logo from '../Logo';

import NavLinks from './NavLinks';

export default function DesktopNav() {
    return (
        <div className="flex fixed top-0left-0 bottom-0 justify-center w-full rounded-md flex-col gap-4">
            <div className='h-32 pl-5 py-4 w-full flex items-end rounded-md shadow-sm'>
                <Logo />
            </div>
            <NavLinks />
            <div className="h-auto w-full grow rounded-md bg-gray-50 md:block shadow-sm"></div>
            <div className="flex h-[48px] items-center justify-start gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none shadow-sm">
                <RiShutDownLine className="w-6 text-lg text-indigo-800" />
                <SignOutButton className="text-[1rem]" />
            </div>
            <div>
            </div>
        </div>
    );
}
