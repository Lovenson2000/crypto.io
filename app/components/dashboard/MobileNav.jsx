import { TbMenuDeep } from "react-icons/tb";
import { RiShutDownLine } from "react-icons/ri";
import { SignOutButton } from '@clerk/nextjs';
import Logo from '../Logo';
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import NavLinks from './NavLinks';

export default function MobileNav() {
    return (
        <div
            className="flex h-16 items-center justify-between rounded-md px-2"
        >
            <div className='h-20 flex'>
                <Logo />
            </div>

            <div>
                <Sheet>
                    <SheetTrigger>
                        <TbMenuDeep className="font-semibold cursor-pointer text-indigo-700 text-3xl" />
                    </SheetTrigger>
                    <SheetContent className='h-screen w-5/6 flex flex-col justify-between'>
                        <NavLinks />
                        <div className="dark:bg-slate-800 h-72 w-full rounded-md bg-gray-100 md:block"></div>
                        <div className="dark:bg-slate-800 flex h-[48px] items-center justify-start gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-indigo-100 hover:text-main md:flex-none">
                            <RiShutDownLine className="w-6 text-lg text-indigo-700" />
                            <SignOutButton className="text-[1rem]" />
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </div>
    );
}
