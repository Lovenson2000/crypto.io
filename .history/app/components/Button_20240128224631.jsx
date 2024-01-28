import Link from "next/link";

export default function Button({children, element, width}) {
    return (
        <Link
            href={element}
            className={`bg-main md:w-${width} text-center text-white px-8 py-2 rounded-full hover:bg-third inline-block focus:outline-none`}>
            {children}
        </Link>
    );
}
