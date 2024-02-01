
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

          <Sheet>
            <SheetTrigger>Open</SheetTrigger>
            <SheetContent className='h-screen bg-red-500 flex flex-col justify-between'>
              <SheetHeader>
                <NavLinks />
                <div className="h-auto w-full grow rounded-md bg-gray-400 md:block"></div>
                <div className="flex gap-4 items-start bg-blue-600 p-4">
                  <RiShutDownLine className="w-12" />
                  <SignOutButton />
                </div>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
}