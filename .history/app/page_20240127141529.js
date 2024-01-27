import Image from "next/image";

export default function Home() {
  return (
    <main className="h-screen text-red-500 flex items-center justify-center">
      <div className="bg-gradient-to-r from-indigo-600 blur-none shadow-lg to-blue-600">
        <h1 className="text-white">Hello World. Next JS</h1>
      </div>
    </main>
  );
}
