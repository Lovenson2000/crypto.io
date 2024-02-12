import { IoMdArrowDropup } from "react-icons/io";

export function CoinBox({ children, price, high }) {
    return (
        <div className="dark:bg-slate-800 flex flex-col gap-2 text-[1rem] dark:text-slate-100 bg-white w-40 p-3 text-slate-700 relative shadow-lg rounded-md">
            <h1>{children}</h1>
            <p className="flex items-center justify-center gap-2">
                <span>${price}</span>
                <IoMdArrowDropup className={`${high ? "text-green-500 text-2xl" : "text-red-500 rotate-180 text-2xl"}`} />
            </p>
        </div>
    );
}

export function CoinPriceBox({ children, data }) {
    return (
        <div className="dark:bg-slate-800 flex flex-col gap-2 text-[1rem] dark:text-slate-100 bg-white w-40 p-3 text-slate-700 relative shadow-lg rounded-md">
            <h1>{children}</h1>
            <p className="">
                <span>${data}</span>
            </p>
        </div>
    );
}

