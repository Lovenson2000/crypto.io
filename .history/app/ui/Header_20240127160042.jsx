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
        <div className='h-20 p-2 bg-dark-blue'>
            <div className="flex">
                <TbBrandCoinbase />
                <h1>Crypto.io</h1>
            </div>
        </div>
    );
}