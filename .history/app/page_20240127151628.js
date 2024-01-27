import Image from "next/image";

export default function Home() {
  return (
    <main className="h-screen bg-blue-dark flex items-center justify-center">
      <div className="shadow-2xl shadow-gray-50 rounded-md relative">
        <div className="flex flex-col justify-center items-center text-center p-8">
          <p className="font-bold mb-2 text-violet-500 dark:text-violet-60 text-2xl md:text-3xl lg:text-4xl">
            Crypto.io
          </p>
        </div>
      </div>
    </main>
  );
}
