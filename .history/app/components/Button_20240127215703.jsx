import Link from "next/link";

export default function Button({children, element}) {
    return (
        <Link
            href={element}
            className="bg-main text-white px-8 py-2 rounded-full hover:bg-secondary focus:outline-none">
            {children}
        </Link>
    );
}

