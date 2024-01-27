import Link from "next/link";

export default function Button({children}) {
    return (
        <Link className="bg-main text-white px-4 py-2 rounded-full hover:bg-secondary focus:outline-none">
            {children}
        </Link>
    );
}

