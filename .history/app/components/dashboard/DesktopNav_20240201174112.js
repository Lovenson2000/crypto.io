import { TbMenuDeep } from "react-icons/tb";
import { RiShutDownLine } from "react-icons/ri";
import { SignOutButton } from '@clerk/nextjs';
import Logo from '../Logo';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import NavLinks from './NavLinks';

export default function DesktopNav() {
    return (
        <div className="flex w-full rounded-md h-full pt-6 flex-col px-2 gap-6">
            <div className='h-20 w-full flex bg-red-300 rounded-md'>
                <Logo />
            </div>
            <NavLinks />
            <div className="h-auto w-full grow rounded-md bg-gray-400 md:block"></div>
            <div className="flex h-[48px] items-center justify-start gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none">
                <RiShutDownLine className="w-6 text-lg text-indigo-700" />
                <SignOutButton className="text-[1rem]" />
            </div>
            <div>
            </div>
        </div>
    );
}
