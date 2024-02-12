export default function CoinPriceBox({ children, data, borderColor }) {
    const borderClass = `border-b border-${borderColor}`;
    return (
        <div className={`${borderClass} dark:bg-slate-800 font-light flex flex-col items-center justify-center gap-2 text-[1rem] dark:text-slate-100 bg-white w-40 lg:w-60 p-3 text-slate-700 relative shadow-lg rounded-md`}>
            <h1>{children}</h1>
            <p>${data}</p>
        </div>
    );
}
