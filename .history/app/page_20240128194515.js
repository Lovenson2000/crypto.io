import Image from "next/image";
import Button from "./components/Button";

export default function Home() {
  return (
    <section className='py-8 px-3 md:py-10'>
      <div className='flex flex-col items-center justify-center gap-8'>
        <div className='flex flex-col justify-center gap-8'>
          <h1 className='font-semibold text-slate-800 text-4xl'>Real-Time <span className="text-third">Insights</span> About Any Cryptocurrency</h1>
          <p className='text-lg'>
            Get real-time information about the trending Cryptocurrencies and make data-based decisions.
          </p>
          <Button element="/dashboard">
            Get Started
          </Button>
        </div>
        <Image
          src='/assets/hero-dashboard.jpg'
          width={700}
          height={500}
          alt='hero-image'
          className="object-contain w-max-[20rem] object-center"
        />
      </div>
    </section>
  );
}
