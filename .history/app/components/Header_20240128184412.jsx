import Button from './Button';
import Link from 'next/link';

export default function Header() {
    return (
        <header className='p-4 bg-white shadow-lg'>
            <div className="container mx-auto flex items-center justify-between">

                <Link href="/" className="flex items-center">
                    <h1 className="text-2xl text-slate-800 font-semibold">Crypto.<span className="text-xl font-bold">io</span></h1>
                </Link>

                <div className="flex items-center gap-8">
                    <Button element="/login">Log In</Button>
                </div>
            </div>
        </header>
    );
}
