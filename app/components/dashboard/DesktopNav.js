import { RiShutDownLine } from "react-icons/ri";
import { SignOutButton } from '@clerk/nextjs';
import Logo from '../Logo';
import NavLinks from './NavLinks';

export default function DesktopNav() {
    return (
        <div className="flex justify-center w-full rounded-md flex-col gap-4 z-30">
            <div className='dark:bg-slate-800 h-32 pl-5 py-4 w-full flex items-end rounded-md shadow-md'>
                <Logo />
            </div>
            <NavLinks />
            <div className="dark:bg-slate-800 h-auto w-full grow rounded-md bg-gray-50 md:block shadow-sm"></div>
            <div className="dark:bg-slate-800 flex h-[48px] items-center justify-start gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-indigo-50 hover:text-indigo-700 md:flex-none shadow-sm">
                <RiShutDownLine className="w-6 text-lg text-indigo-800" />
                <SignOutButton className="text-[1rem]" />
            </div>
        </div>
    );
}
