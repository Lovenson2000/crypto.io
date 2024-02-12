import { IoMdArrowDropup } from "react-icons/io";

export default function CoinBoxChart({children, price, high}) {
    return (
        <div className="dark:bg-slate-800 flex flex-col gap-2 text-[0.9rem] dark:text-slate-100 bg-white w-36 md:w-48 p-3 text-slate-700 relative shadow-md rounded-md">
            <h1>{children}</h1>
            <p className="flex items-center justify-center gap-2">
                <span>${price}</span>
                <IoMdArrowDropup className={`${high ? "text-green-500 text-2xl": "text-red-500 rotate-45 text-2xl"}`} />
            </p>
        </div>
    );
}

