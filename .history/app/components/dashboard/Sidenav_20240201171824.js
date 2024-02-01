import MobileNav from "./MobileNav";

export default function SideNav() {
  return (
    <div className='h-full shadow-md flex flex-col px-3 py-4 md:px-2'>
      <div className='flex flex-col'>
        <div className="md:hidden">
          <MobileNav />
        </div>
      </div>
    </div>
  );
}