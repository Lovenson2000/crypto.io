import Link from "next/link";

export default function Button({children, element}) {
    return (
        <Link
            href={element}
            className="bg-main w-max-[20rem] text-white px-8 py-2 rounded-full hover:bg-third focus:outline-none">
            {children}
        </Link>
    );
}

