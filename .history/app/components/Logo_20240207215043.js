import Image from "next/image";
import Link from "next/link";

export default function Logo() {
    return (
        <Link href="/" className="dark:text-slate-100  flex items-center gap-2">
            <Image
                src='/assets/logo.png'
                width={30}
                height={30}
                alt="logo-image"
                className='rotate-90'
            />
            <h1 className="text-3xl text-slate-700 font-bold">Crypto.<span className="text-xl font-bold">io</span></h1>
        </Link >
    );
}