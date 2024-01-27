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
        <div className='h-20 flex items-center justify-between bg:blue-dark'>
            <div className="flex">
                <TbBrandCoinbase />
                <h1>Crypto.io</h1>
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