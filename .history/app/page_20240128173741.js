import Button from "./components/Button";

export default function Home() {
  return (
    <section className='py-5 md:py-10'>
      <div className='wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0'>
        <div className='flex flex-col justify-center gap-8'>
          <h1 className='h1-bold'>Real-Time Insights About Any Cryptocurrency</h1>
          <p className='p-regular-20 md:p-regular-24'>
            Get real-time information about the trending Cryptocurrencies and make data-based decisions.
          </p>
          <Button element="/dashboard">
            Get Started
          </Button>
        </div>
      </div>
    </section>
  );
}
