import Image from "next/image";

export default function Home() {
  return (
    <main className="h-screen flex items-center justify-center">
      <div className="shadow-2xl bg-white rounded-md relative">
        <div className="flex flex-col justify-center items-center text-center p-8">
          <p className="font-bold mb-2 from-indigo-600  bg-gradient-to-r text-gray-light text-4xl ">
            Crypto.io
          </p>
        </div>
      </div>
    </main>
  );
}
