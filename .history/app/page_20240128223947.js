import Image from "next/image";
import Link from "next/link";
import Button from "./components/Button";

export default function Home() {

  const currentYear = new Date().getFullYear();
  return (
    <>
      <section className='pt-8 pb-4 px-3 md:px-8 md:py-10'>
        <div className='flex flex-col md:flex-row items-center justify-center gap-8'>
          <div className='flex flex-col justify-center gap-6'>
            <h1 className='font-semibold text-slate-700 text-4xl'>Real-time <span className="text-third">Insights</span> About Any Cryptocurrency</h1>
            <p className='text-lg'>
              Get real-time information about the trending Cryptocurrencies and make data-based decisions.
            </p>
            <div className="flex items-center justify-center">
              <Button 
                element="/dashboard"
                className=""
              >
                Get Started
              </Button>
            </div>
          </div>
          <Image
            src='/assets/graph.avif'
            width={700}
            height={500}
            alt='hero-image'
            className="object-contain w-min-80 object-center mix-blend-darken"
          />
        </div>
      </section>

      <footer className="flex items-center justify-between py-2 md:px-8 px-3 w-full">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src='/assets/logo.png'
            width={30}
            height={30}
            alt="logo-image"
            className='rotate-90'
          />
          <h1 className="text-lg text-slate-800">Crypto.<span className="text-lg font-semibold">io</span></h1>
        </Link>
        <p className="text-md text-slate-800">{currentYear}&copy;Copyright</p>
      </footer>
    </>
  );
}
