import Button from './Button';
import Link from 'next/link';
import Image from 'next/image';
import Logo from './Logo';

export default function Header() {
    return (
        <header className='px-4 py-3 md:px-8 md:py-4 bg-white shadow-lg'>
            <div className="flex items-center justify-between">
                <Logo />
                <div className="flex items-center">
                    <Button element="/sign-in">Log In</Button>
                </div>
            </div>
        </header>
    );
}
