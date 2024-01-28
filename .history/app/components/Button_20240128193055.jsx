import Link from "next/link";

export default function Button({children, element}) {
    return (
        <Link
            href={element}
            className="bg-main text-white px-8 py-1.5 rounded-full hover:bg-third focus:outline-none">
            {children}
        </Link>
    );
}

