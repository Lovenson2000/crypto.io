import Image from "next/image";
import Button from "./components/Button";

export default function Home() {
  return (
    <section className='h-11/12 py-5 md:py-10'>
      <div className='grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0'>
        <div className='flex flex-col justify-center gap-8'>
          <h1 className='font-semibold text-3xl'>Real-Time Insights About Any Cryptocurrency</h1>
          <p className='text-lg'>
            Get real-time information about the trending Cryptocurrencies and make data-based decisions.
          </p>
          <Button element="/dashboard">
            Get Started
          </Button>
        </div>
        <Image
          src='/assets/img-2.jpg'
          width={1000}
          height={1000}
          alt='hero-image'
          className="max-h-[70vh] object-contain object-center  2xl:max-h-[50vh]"
        />
      </div>
    </section>
  );
}
