import { IoMdArrowDropup } from "react-icons/io";

export default function CoinBox({ children, price, high, borderColor }) {
    return (
        <div className={`border-b-2 ${borderColor} dark:bg-slate-800 flex flex-col items-center justify-center gap-2 text-[1rem] font-light dark:text-slate-100 bg-white w-40 lg:w-60 p-3 text-slate-700 relative shadow-lg rounded-md`}>
            <h1>{children}</h1>
            <p className="flex items-center justify-center gap-2">
                <span>${price}</span>
                <IoMdArrowDropup className={`${high ? "text-green-500 text-2xl" : "text-red-500 rotate-180 text-2xl"}`} />
            </p>
        </div>
    );
}


