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
        <div
            className="mb-2 flex h-20 items-center justify-between rounded-md bg-blue-400 p-4"
        >
            <div className='h-20 w-32 md:w-40 flex bg-red-300'>
                <Logo />
            </div>

            <div>
                
            </div>
        </div>
    );
}
