import Link from "next/link";

export default function Button({children, element}) {
    return (
        <Link
            href={element}
            className="bg-main text-white px-4 py-2 rounded-lg hover:bg-secondary focus:outline-none">
            {children}
        </Link>
    );
}

