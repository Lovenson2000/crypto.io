import Image from "next/image";

export default function Home() {
  return (
    <main className="h-screen text-red-500 flex items-center justify-center">
      <h1>Hello World. Next JS</h1>


      <div className="shadow-2xl shadow-gray-50 dark:shadow-none border border-violet-50 dark:border-blue-850 bg-white dark:bg-blue-750 rounded-md relative">
        <div>
          <p className="font-bold mb-2 text-violet-500 dark:text-violet-60 text-2xl md:text-3xl lg:text-4xl">
            Crypto.io
          </p>
        </div>
      </div>
    </main>
  );
}
