import Image from "next/image";

export default function Home() {
  return (
    <main className="h-screen bg-secondary flex items-center justify-center">
      <div className="shadow-2xl border border-t-violet-600 dark:border-blue-850 bg-white dark:bg-blue-750 rounded-md relative">
        <div className="flex flex-col justify-center items-center text-center p-8">
          <p className="font-bold mb-2  text-violet-500 dark:text-violet-60 text-2xl md:text-3xl lg:text-4xl">
            Crypto.io
          </p>
        </div>
      </div>
    </main>
  );
}
