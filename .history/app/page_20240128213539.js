import Image from "next/image";
import Link from "next/link";
import Button from "./components/Button";

export default function Home() {

  const currentYear = new Date().getFullYear();
  return (
    <>
      <section className='py-8 px-3 md:py-10'>
        <div className='flex flex-col md:flex-row items-center justify-center gap-8'>
          <div className='flex flex-col justify-center gap-8'>
            <h1 className='font-semibold text-slate-800 text-4xl'>Real-time <span className="text-third">Insights</span> About Any Cryptocurrency</h1>
            <p className='text-lg'>
              Get real-time information about the trending Cryptocurrencies and make data-based decisions.
            </p>
            <Button element="/dashboard">
              Get Started
            </Button>
          </div>
          <Image
            src='/assets/hero-dashboard.jpg'
            width={500}
            height={500}
            alt='hero-image'
            className="object-contain w-max-[20rem] object-center"
          />
        </div>
      </section>
      <footer className="flex items-center justify-between px-3 w-full">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src='/assets/logo.png'
            width={30}
            height={30}
            alt="logo-image"
            className='rotate-90'
          />
          <h1 className="text-xl text-slate-700 font-bold">Crypto.<span className="text-xl font-bold">io</span></h1>
        </Link>
        <p className="text-md text-slate-800">{currentYear}&copy;Copyright</p>
        

      </footer>
    </>
  );
}
