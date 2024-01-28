import Link from "next/link";

export default function Button({children, element}) {
    return (
        <Link
            href={element}
            className="bg-third text-white px-8 py-2 rounded-full hover:bg-main focus:outline-none">
            {children}
        </Link>
    );
}
