import { IoMdArrowDropup } from "react-icons/io";

export default function CoinBoxChart({children, price, high}) {
    return (
        <div className="dark:bg-slate-800 flex flex-col gap-2 text-[0.9rem] dark:text-slate-100 bg-white w-36 md:w-48 p-3 text-slate-700 relative border-b-2 border-main shadow-lg rounded-sm">
            <h1>{children}</h1>
            <p>${price}</p>
        </div>
    );
}

