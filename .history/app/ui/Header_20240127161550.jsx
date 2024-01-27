import Link from "next/link";
import { TbBrandCoinbase } from "react-icons/tb";

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
        <div className='h-20 w-full bg-blue-dark flex items-center justify-between'>
            <div className="flex items-center text-gray-light">
                <TbBrandCoinbase />
                <h1>Crypto.<span className="text-violet-600">io</span></h1>
            </div>
            <div>
                { links.map(link => 
                    <Link 
                        href={link.href}
                        key={link.name}
                    >
                        {link.name}
                    </Link>
                )}
            </div>
        </div>
    );
}