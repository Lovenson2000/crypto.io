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



export default function SideNav() {
  return (
    <div className='h-full shadow-md flex flex-col px-3 py-4 md:px-2'>
      <div className='flex flex-col'>
        <div
          className="mb-2 flex h-20 items-center justify-between rounded-md bg-blue-200 p-4"
        >
          <div className='h-20 w-32 md:w-40 flex bg-red-300'>
            <Logo />
          </div>

          <div className="md:hidden">
            <Sheet>
              <SheetTrigger className="cursor-pointer">
                <TbMenuDeep className="font-semibold text-indigo-700 text-3xl" />
              </SheetTrigger>
              <SheetContent className='h-screen w-5/6 flex flex-col justify-between'>
                <NavLinks />
                <div className="h-72 w-full rounded-md bg-gray-100 md:block"></div>
                <div className="flex h-[48px] items-center justify-start gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none">
                  <RiShutDownLine className="w-6 text-lg text-indigo-700" />
                  <SignOutButton className="text-[1rem]" />
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Desktop Sidebar */}
          <div className="hidden md:flex flex-col">
            <NavLinks />
            <div className="h-72 w-full rounded-md bg-gray-100 md:block"></div>
            <div className="flex h-[48px] items-center justify-start gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none">
              <RiShutDownLine className="w-6 text-lg text-indigo-700" />
              <SignOutButton className="text-[1rem]" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}