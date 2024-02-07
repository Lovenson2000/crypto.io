import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

export default function SideNav() {
  return (
    <div className='dark:bg-slate-600 h-full shadow-lg flex flex-col px-2 py-1 md:px-2'>
      <div className="md:hidden">
        <MobileNav />
      </div>
      <div className="hidden rounded-md h-full md:flex">
        <DesktopNav />
      </div>
    </div>
  );
}