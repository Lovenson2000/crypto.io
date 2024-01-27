import Link from "next/link";
import { TbBrandCoinbase } from "react-icons/tb";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/app/components/ui/sheet"

const links = [
    {
        name: 'SignUp',
        href: '/signup',
    },
    {
        name: 'SignIn',
        href: '/signin',
    },
];

export default function Header() {
    return (
        <div className='h-20 w-full bg-blue-dark flex items-center justify-between px-8 py-2'>
            <div className="flex items-center text-gray-light">
                <TbBrandCoinbase className="text-2xl" />
                <h1 className="text-2xl">Crypto.<span className="text-violet">io</span></h1>
            </div>
            <div>
                <Sheet>
                    <SheetTrigger>Open</SheetTrigger>
                    <SheetContent>
                        <SheetHeader>
                            <SheetTitle>Are you absolutely sure?</SheetTitle>
                            <SheetDescription>
                                This action cannot be undone. This will permanently delete your account
                                and remove your data from our servers.
                            </SheetDescription>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>
            </div>
        </div>
    );
}