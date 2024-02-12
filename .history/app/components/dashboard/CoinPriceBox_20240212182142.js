export default function CoinPriceBox({ children, data }) {
    return (
        <div className="dark:bg-slate-800 flex flex-col gap-2 text-[1rem] dark:text-slate-100 bg-white w-40 p-3 text-slate-700 relative shadow-lg rounded-md">
            <h1 className="text-center">{children}</h1>
            <p>${data}</p>
        </div>
    );
}