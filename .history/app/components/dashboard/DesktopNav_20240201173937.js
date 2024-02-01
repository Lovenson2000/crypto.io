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
        <div className="flex w-full rounded-md h-full bg-yellow-500 flex-col px-2 gap-4">
            <div className='h-20 w-full flex bg-red-300 rounded-md'>
                <Logo />
            </div>
            <NavLinks />
            <div className="h-auto w-full grow rounded-md bg-gray-400 md:block"></div>
            
            <div>
            </div>
        </div>
    );
}
