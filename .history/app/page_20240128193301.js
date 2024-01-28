import Image from "next/image";
import Button from "./components/Button";

export default function Home() {
  return (
    <section className='py-5 md:py-10'>
      <div className='flex items-center justify-center'>
        <div className='flex flex-col justify-center gap-8'>
          <h1 className='font-semibold text-slate-800 text-4xl'>Real-Time <span className="text-third">Insights</span> About Any Cryptocurrency</h1>
          <p className='text-lg'>
            Get real-time information about the trending Cryptocurrencies and make data-based decisions.
          </p>
          <Button element="/dashboard">
            Get Started
          </Button>
        </div>
        {/* <Image
          src='/assets/img-2.jpg'
          width={700}
          height={2000}
          alt='hero-image'
          className="max-h-[80vh] object-contain object-center  2xl:max-h-[50vh]"
        /> */}
      </div>
    </section>
  );
}
