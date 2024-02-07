import Image from "next/image";
import Link from "next/link";
import Button from "./components/Button";
import Header from "./components/Header";

export default function Home() {

  const currentYear = new Date().getFullYear();

  return (
    <section className="dark:bg-slate-900 h-screen flex flex-col">
      <Header />
      <main className='flex flex-col md:flex-row items-center justify-center gap-8 pt-8 h-full pb-4 px-3 md:px-8 md:py-10'>

        <div className='flex flex-col items-center justify-center gap-6'>
          <h1 className='font-semibold text-slate-700 dark:text-slate-200 text-4xl'>Real-time <span className="text-third">Insights</span> About Any Cryptocurrency</h1>
          <p className='text-lg dark:text-slate-200'>
            Get real-time information about the trending Cryptocurrencies and make data-based decisions.
          </p>
          <Link
            href="/dashboard"
            className="w-60 bg-main text-center text-white px-8 py-2 rounded-full hover:bg-third inline-block focus:outline-none">
            Get Started
          </Link>
        </div>

        <div>
          <Image
            src='/assets/graph.avif'
            width={700}
            height={500}
            alt='hero-image'
            className="object-contain w-min-80 object-center dark:bg-blend-normal mix-blend-darken"
          />
        </div>
      </main>
      <footer className="dark:text-slate-200 flex items-center justify-between px-4 py-3 md:px-8 md:py-4 w-full">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src='/assets/logo.png'
            width={30}
            height={30}
            alt="logo-image"
            className='rotate-90'
          />
          <h1 className="text-lg dark:text-slate-200  text-slate-800">Crypto.<span className="text-lg font-semibold">io</span></h1>
        </Link>
        <p className="text-md dark:text-slate-200  text-slate-800">{currentYear}&copy;Copyright</p>
      </footer>
    </section>
  );
}
