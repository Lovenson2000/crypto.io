import Button from './Button';
import Link from 'next/link';
import Image from 'next/image';
import Logo from './Logo';
import { ModeToggle } from './ModeToggle';

export default function Header() {
    return (
        <header className='w-full dark:bg-slate-900 bg-white shadow-lg'>
            <div className="flex items-center justify-between px-2 py-3 md:px-8 md:py-4">
                <Logo />
                <div className="flex items-center gap-2 md:gap-8">
                    <Link
                        href="/sign-in"
                        className="bg-main w-20 text-center text-white px-6 py-2 rounded-4xl hover:bg-third inline-block focus:outline-none">
                        Login
                    </Link>
                    <ModeToggle />
                </div>
            </div>
        </header>
    );
}
