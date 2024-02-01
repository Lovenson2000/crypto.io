
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
            <SheetContent className="">
              <SheetHeader>
                <div className='h-screen flex flex-col justify-between'>
                  <NavLinks />
                  <div className="w-full rounded-md bg-gray-500"></div>
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