import Button from './Button';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
    return (
        <header className='px-4 py-3 md:px-8 md:py-4 bg-white shadow-lg'>
            <div className="flex items-center justify-between">

                <Link href="/" className="flex items-center gap-2">
                    <Image
                        src='/assets/logo.png'
                        width={30}
                        height={30}
                        alt="logo-image"
                        className='rotate-90'
                    />
                    <h1 className="text-2xl text-slate-700 font-bold">Crypto.<span className="text-xl font-bold">io</span></h1>
                </Link>

                <div className="flex items-center">
                    <Button element="/login">Log In</Button>
                </div>
            </div>
        </header>
    );
}