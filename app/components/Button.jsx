import Link from "next/link";

export default function Button({children, element}) {
    return (
        <Link
            href={element}
            className="bg-main sm2:w-max-[14rem] text-center text-white px-8 py-2 rounded-full hover:bg-third inline-block focus:outline-none">
            {children}
        </Link>
    );
}

